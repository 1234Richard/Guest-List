var name_list = []
function Submit() {
    var value = document.getElementById("name_insert").value;
    name_list.push(value);
    
    console.log(name_list);
    document.getElementById("list_with_commas").innerHTML = name_list;
}

function vertical() {
    var breaker = name_list.join("<br>");
    console.log(breaker);
    document.getElementById("list_without_sort").innerHTML = breaker;
}

function Sort() {
    name_list.sort();
    var sort = name_list.join("<br>");
    console.log(sort);
    document.getElementById("Show_list_sort").innerHTML = sort;
}

function Search() {
    var found = 0;
    var search_name = document.getElementById("Show_name_no:").value;
    var how_many_times;
    for (how_many_times = 0; how_many_times < name_list.length; how_many_times++) {
        if (search_name == name_list[how_many_times]) {
            found = found + 1;
        }
    document.getElementById("display_duplicate_names").innerHTML = "name found by " + found + " time/s";
    console.log("name founded " + found + "time/s");     
    }

}