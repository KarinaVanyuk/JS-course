var d = new Date();
var min = d.getMinutes();
var hours = d.getHours();
var sec=d.getSeconds();
var hours1=23, min1=59, sec1=59;
sec2=(sec1-sec+1);
min2=(min1-min);
hours2=(hours1-hours);
if (sec2==60) {
	sec2=0;
	min2+=1;
};
if (min2==60) {
	min2=0;
	hours2+=1;
};
if (sec2<10) {
	sec2='0'+sec2;
};
if (min2<10) {
	min2='0'+min2;
};
alert(d+ "\nВремя до конца дня " + hours2 + ":" + min2+ ":" + sec2);

