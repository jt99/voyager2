var MemoryAdapter = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var employees = [
        {"id": 1, "firstName": "Jay", "lastName": "Torian", "managerId": 0, "managerName": "", "title": "President and CEO", "department": "Corporate", "cellPhone": "978-460-5048", "officePhone": "978-460-5048", "email": "jaytorian@gmail.com", "city": "Newton, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://insight.dana-farber.org"},
        {"id": 2, "firstName": "Caren", "lastName": "Cummings", "managerId": 1, "managerName": "Steven Singer", "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://insight.dana-farber.org"},
        {"id": 3, "firstName": "Greg", "lastName": "Hoffman", "managerId": 1, "managerName": "Jay Torian", "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://insight.dana-farber.org"},
        {"id": 4, "firstName": "Steve", "lastName": "Singer", "managerId": 1, "managerName": "Jay Torian", "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://insight.dana-farber.org"},
        {"id": 5, "firstName": "Craig", "lastName": "Schissler", "managerId": 1, "managerName": "Jay Torian", "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://insight.dana-farber.org"},
        {"id": 6, "firstName": "Lee", "lastName": "Whale", "managerId": 4, "managerName": "Steven Singer", "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://insight.dana-farber.org"},
        {"id": 7, "firstName": "Mackenzie", "lastName": "Kimball", "managerId": 4, "managerName": "Caren Cummings", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://insight.dana-farber.org"},
        {"id": 8, "firstName": "Lisa", "lastName": "Nelson", "managerId": 2, "managerName": "Caren Cummings", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://insight.dana-farber.org"},
        {"id": 9, "firstName": "Susan", "lastName": "Ehret", "managerId": 2, "managerName": "Jay Torian", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://insight.dana-farber.org"},
        {"id": 10, "firstName": "Lisa", "lastName": "Lee", "managerId": 5, "managerName": "Caren Cummings", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://insight.dana-farber.org"},
        {"id": 11, "firstName": "Amy", "lastName": "Blaisdell", "managerId": 5, "managerName": "Jay Torian", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://insight.dana-farber.org"},
        {"id": 12, "firstName": "Mike", "lastName": "Buller", "managerId": 4, "managerName": "Steven Singer", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://insight.dana-farber.org"}
    ];

}