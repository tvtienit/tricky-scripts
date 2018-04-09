function dl_ksat(level) {
    if (!level) {
        console.warn('Level is required');
        console.log('Use dl_ksat([<from>, <to>])');
        return;
    } 

    var range = level.map(x => x += 2);
    var parent = $('#dl_ksat').children()[1];
    var srv_group = parent.children;
    start();
    
    function start() {
        for(var i = 0; i < srv_group.length; i++) {
            if (srv_group[i].innerHTML.indexOf('radio') === -1) { continue; }
            var row = srv_group[i].children;
            do {
                var lets_random_child = r_int(range);
                var cell = row[lets_random_child];
                var input = cell.children[0];
                input.checked = true;
            } while (cell.children.length === 0 || input === undefined);
        }
    }

    function r_int(range) {
        var min = range[0],
            max = range[1];
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
}