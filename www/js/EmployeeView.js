// New file for employee view class

var EmployeeView = function(adapter, template, employee) {
 
    this.initialize = function() {
        this.el = $('<div/>');
		  this.el.on('click', '.add-contact-btn', this.addToContacts);   
		  this.el.on('click', '.change-pic-btn', this.changePicture);
		  this.el.on('click', '.add-deviceinfo-btn', this.deviceInfo);   		  
		  this.el.on('click', '.add-location-btn', this.addLocation);
		  this.el.on('click', '.add-battery-btn', this.batteryLevel);
		  this.el.on('click', '.add-vibrate-btn', this.vibrateNow);		  		  		 		       		  
    };
 
	this.render = function() {
    this.el.html(template(employee));
    return this;
	}; 


   // Get information about the Geo Location of the device
	this.addLocation = function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(
        function(position) {        
         // report a ton of stuff about position - alert box,lin breat    
			alert('Latitude: '          + position.coords.latitude          + '\n' +
         	 	'Longitude: '         + position.coords.longitude         + '\n' +
          		'Altitude: '          + position.coords.altitude          + '\n' +
          		'Heading: '           + position.coords.heading           + '\n' +
          		'Speed: '             + position.coords.speed             + '\n' +
          		'Timestamp: '         + position.timestamp                + '\n');                                               
        },
        function() {
     			alert('Error code: '    + error.code    + '\n' +
                  'Message: ' + error.message + '\n');
        });
    return false;
	};
		
	
   // Get information about the device
	this.deviceInfo = function(event) {
   event.preventDefault();
   console.log('DeviceInfo');
	
   var model = device.model;
   var devicePlatform = device.platform;
   var deviceID = device.uuid;
   var deviceVersion = device.version; 
   
   alert('Model: ' 			+ model 			+ '\n' + 
   		'Platform: ' 		+ devicePlatform 			+ '\n' +
   		'UUID: ' 			+ deviceID 			+ '\n' +   		
   		'Version: ' 		+ deviceVersion 			+ '\n');
   return false;   		
	};	
	
	
   // Get information about the battery
	this.batteryLevel = function(event) {
   event.preventDefault();
   console.log('batteryLevel');	
	var batteryLevelstr = info.level
	var isPluggedstr = info.isPlugged	   
   alert('Battery Level: ' 	+ 	batteryLevelstr 			+ '\n' + 
   		'Plugged In: ' 		+ 	isPluggedstr 			+ '\n');
   return false;   		
	};

   // Vibrate phone for 2.5 seconds
	this.vibrateNow = function(event) {
   event.preventDefault();
   console.log('vibrateNow');	
   navigator.notification.vibrate(2500);			   
   return false;   		
	};


	// Save to contact book	 
	this.addToContacts = function(event) {
    event.preventDefault();
    console.log('addToContacts');
    if (!navigator.contacts) {
        alert("Contacts API not supported", "Error");
        return;
    }
    var contact = navigator.contacts.create();
    contact.name = {givenName: employee.firstName, familyName: employee.lastName};
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', employee.officePhone, false);
    phoneNumbers[1] = new ContactField('mobile', employee.cellPhone, true);
    contact.phoneNumbers = phoneNumbers;
    contact.save();
    alert('Contact has been added');    
    return false;
	};	


   // Take a Picture and save as current employee pic	
	this.changePicture = function(event) {
    event.preventDefault();
    if (!navigator.camera) {
        alert("Camera API not supported", "Error");
        return;
    }
    var options =   {   quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                        encodingType: 0     // 0=JPG 1=PNG
                    };
 
    navigator.camera.getPicture(
        function(imageData) {
            $('.employee-image', this.el).attr('src', "data:image/jpeg;base64," + imageData);
        },
        function() {
            alert('Error taking picture', 'Error');
        },
        options);
 
    return false;
	};	
 
    this.initialize();
 
}