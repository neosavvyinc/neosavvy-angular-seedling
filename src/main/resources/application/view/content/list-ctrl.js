Neosavvy.Controllers.controller('view.content.ListController',
    ['$scope', '$rootScope', 'constants.Configuration',
        function ($scope, $rootScope, configuration) {
            this.sayingsList = [
                {name: "Ronnie James Dio", saying: "Bacon ipsum dolor sit amet nulla ham qui " +
                    "sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, " +
                    "dolore aliqua non est magna in labore pig pork biltong."},
                {name: "Lemmy Kilmister", saying: "Stonefish southern sandfish. Skipjack tuna, scat " +
                    "oceanic whitetip shark dogfish shark North Pacific daggertooth, Japanese eel " +
                    "cuckoo wrasse scabbard fish, tetra; rocket danio! Mosquitofish Sundaland noodlefish " +
                    "sailback scorpionfish dace roosterfish yellowtail yellowfin cutthroat trout Black " +
                    "angelfish sailback scorpionfish."},
                {name: "Bruce Dickinson", saying: "Lebowski ipsum …which would place him high in the " +
                    "runnin' for laziest worldwide—but sometimes there's a man… sometimes there's a " +
                    "man. Dolor sit amet, consectetur. Vee could do things you only dreamed of, Lebowski."}
            ];
        }]);