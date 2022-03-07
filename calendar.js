function setCalendar(table)
{
var d = new Date;
var y = d.getFullYear();
var m = d.getMonth() + 1
let w = new Date(y + "-" + m + "-01").getDay();
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr1')
table.appendChild(tr);
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr2')
table.appendChild(tr);
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr3')
table.appendChild(tr);
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr4')
table.appendChild(tr);
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr5')
table.appendChild(tr);
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr6')
table.appendChild(tr);
if (w == 0) {
    setTable()
}
else {
    for (let i = 0; i < w; i++) {
        var t = document.createElement('td');
        t.innerHTML = ' '
        document.getElementById('tr1').appendChild(t);
    }
    setTable()
}
function setTable() {
    numberOfDays = new Date(y, m, 0).getDate();
    for (let i = 1; i < numberOfDays + 1; i++) {
        function checkToday() {
            if (i == d.getDate()) {
                t.style.backgroundColor = 'skyblue';
            }
        }
        if (table.rows[1].cells.length == 7) {
            if (table.rows[2].cells.length == 7) {
                if (table.rows[3].cells.length == 7) {
                    if (table.rows[4].cells.length == 7) {
                        checkToday()
                        var t = document.createElement('td');
                        t.innerHTML = i.toString()
                        document.getElementById('tr5').appendChild(t);
                    }
                    else {
                        checkToday()
                        var t = document.createElement('td');
                        t.innerHTML = i.toString()
                        document.getElementById('tr4').appendChild(t);
                    }
                }
                else {
                    checkToday()
                    var t = document.createElement('td');
                    t.innerHTML = i.toString()
                    document.getElementById('tr3').appendChild(t);
                }
            }
            else {
                checkToday()
                var t = document.createElement('td');
                t.innerHTML = i.toString()
                document.getElementById('tr2').appendChild(t);
            }
        }
        else {
            checkToday()
            var t = document.createElement('td');
            t.innerHTML = i.toString()
            document.getElementById('tr1').appendChild(t);
        }
    }
}}