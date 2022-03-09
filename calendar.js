var hk_holidays;
var obj;
var d = new Date;
var y = d.getFullYear();
var m = d.getMonth() + 1
let w = new Date(y + "-" + m + "-01").getDay();
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ["", "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function setThisMonthCalendar() {
    var topbar = document.createElement('div')
    topbar.setAttribute('id', 'topbar')
    document.getElementById('calendar').appendChild(topbar);
    var prevMonth = document.createElement('span')
    prevMonth.setAttribute('id', 'prev')
    prevMonth.innerHTML = '<&nbsp;&nbsp;'
    document.getElementById('topbar').appendChild(prevMonth);
    var nextMonth = document.createElement('span')
    nextMonth.setAttribute('id', 'next')
    nextMonth.innerHTML = '&nbsp;&nbsp;>'
    document.getElementById('topbar').appendChild(nextMonth);
    var showMonth = document.createElement('span')
    showMonth.innerHTML = '&nbsp;&nbsp&nbsp;&nbsp'+months[m] + '&nbsp;&nbsp;' + y.toString()
    document.getElementById('topbar').appendChild(document.createElement('span').appendChild(showMonth));
    var table = document.createElement('table');
    table.setAttribute('id', 't');
    table.style.width = '100%';
    table.style.height = '500px';
    document.getElementById('calendar').appendChild(table);
    var table = document.createElement('tbody');
    table.setAttribute('id', 'month');
    document.getElementById('t').appendChild(table);
    var week = document.createElement('tr');
    week.setAttribute('id', 'week')
    document.getElementById('month').appendChild(week)
    for (let i = 0; i < weekDays.length; i++) {
        var td = document.createElement('td');
        if (weekDays[i] == 'Sunday') {
            td.style.color = 'red';
        }
        td.style.textAlign = 'center'
        td.innerHTML = weekDays[i];
        document.getElementById('week').appendChild(td);
    }
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
            function checkSunday() {
                var day = new Date(y + '-' + m + '-' + i).getDay();
                if (day == 0) {
                    t.style.color = 'red';
                }
            }
            function checkEvents(cell, date) {
                fetch('/static/calendars/hk_holidays.json').then((res) => res.json()).then(res => obj = res)
                .then(() => {
                    if (obj['events'][months[m]][date] === undefined) {}
                    else {
                        var event = document.createElement('span');
                        event.innerHTML = '<br>'+ obj['events'][months[m]][date]
                        cell.appendChild(event)
                    }
                })
            }
            if (table.rows[1].cells.length == 7) {
                if (table.rows[2].cells.length == 7) {
                    if (table.rows[3].cells.length == 7) {
                        if (table.rows[4].cells.length == 7) {
                            var t = document.createElement('td');
                            checkSunday()
                            t.style.textAlign = 'right';
                            t.style.verticalAlign = 'top';
                            var p = document.createElement('span');
                            p.innerHTML = i;
                            t.appendChild(p)
                            checkEvents(t, i)
                            t.style.height == '73px';
                            document.getElementById('tr5').appendChild(t);
                            checkToday()
                        }
                        else {
                            var t = document.createElement('td');
                            checkSunday()
                            t.style.textAlign = 'right';
                            t.style.verticalAlign = 'top';
                            var p = document.createElement('span');
                            p.innerHTML = i;
                            t.appendChild(p)
                            checkEvents(t, i)
                            t.style.height == '73px';
                            document.getElementById('tr4').appendChild(t);
                            checkToday()
                        }
                    }
                    else {
                        var t = document.createElement('td');
                        checkSunday()
                        t.style.textAlign = 'right';
                        t.style.verticalAlign = 'top';
                        var p = document.createElement('span');
                        p.innerHTML = i;
                        t.appendChild(p)
                        checkEvents(t, i)
                        t.style.height == '73px';
                        document.getElementById('tr3').appendChild(t);
                        checkToday()
                    }
                }
                else {
                    var t = document.createElement('td');
                    checkSunday()
                    t.style.textAlign = 'right';
                    t.style.verticalAlign = 'top';
                    var p = document.createElement('span');
                    p.innerHTML = i;
                    t.appendChild(p)
                    checkEvents(t, i)
                    t.style.height == '73px';
                    document.getElementById('tr2').appendChild(t);
                    checkToday()
                }
            }
            else {
                var t = document.createElement('td');
                checkSunday()
                t.style.textAlign = 'right';
                t.style.verticalAlign = 'top';
                var p = document.createElement('span');
                p.innerHTML = i;
                t.appendChild(p)
                checkEvents(t, i)
                t.style.height == '73px';
                document.getElementById('tr1').appendChild(t);
                checkToday()
            }
        }
    }
}
