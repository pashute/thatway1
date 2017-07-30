// This is a JavaScript file

    var elevatorHtml = "You are near <i class='icon ion-ios-upload-outline'></i> Elevator hall B<br /><small>pointing south</small>";
    var gotoInfo = [ { goingto: " Restaurants", ginfo: "Walk 40 steps ahead. Turn left into the south corridor and 30 steps to the restaurants" },
                     { goingto: "Clothing shops", ginfo: "There are several clothing shops for men women and children along this corridor.<br />"
                      + "In the real app we will give you a list of shops to choose from. " },
                     { goingto: "Discount Bank", ginfo: "Discount bank is right behind you. The ATM machine is to your right, 10 steps away." },
                     { goingto: "Supermarket", ginfo: "There is no supermarket in Big Fashion. Rami Levy is accross the road, "
                      + "and Shupersol is in the old Big Betchemish mall" },
                     { goingto: "Toilets", ginfo: "Walk 15 steps ahead then turn right and walk 20 steps. "
                      + "The first three doors to your right are the rest-room for the disabled, "
                      + "the men's room and then the women's room." },
                     { goingto: "Exits", ginfo: "Turn back to exit the elevator hall then turn left 500 meters for the North exit<br />"
                      + "or turn right and 20 steps to the South exit. <br />"
                      + "In the real app, you will get a list of exits to choose from." }, 
                     { goingto: "Emergency exit", ginfo: "Do not panic. the exit is only 50 steps ahead and then turn left." },
                     { goingto: "Call human", ginfo: "Calling our human helpdesk 24/7. <br />Please note that on Saturday you receive service from GoyShelShabbat.com"}
                      ];
    var whatshere = "";