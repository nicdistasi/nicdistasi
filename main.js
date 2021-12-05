var videoData = [['skateboardpp.mp4', '6/16/18', 'Sk8board P', 'June 16, 2018'], ['woodwardcodyash.mp4', '8/4/18', 'Woodward 2018', 'August 4, 2018'], ['currentjoys.mp4', '8/14/18', 'Current Joys', 'August 14, 2018'], ['melting.mp4', '8/27/18', 'Melting', 'August 27, 2018'], ['woh.mp4', '9/2/18', 'Woh', 'September 2, 2018'], ['alookback.mp4', '9/6/18', 'A Look Back', 'September 6, 2018'], ['flintxnic.mp4', '9/15/18', 'Flint x Nic Collab', 'September 15, 2018'], ['liamxnic.mp4', '9/28/18', 'Liam x Nic Collab', 'September 28, 2018'], ['glitter.mp4', '11/23/18', 'Glitter!', 'November 23, 2018'], ['dresdream.mp4', '1/20/19', "Dre's Dream", 'January 20, 2019'], ['filmeocean.mp4', '2/12/19', 'Filmeocean', 'February 12, 2019'], ['oh.mp4', '2/23/19', 'Oh?', 'February 23, 2019'], ['jujujux.mp4', '2/27/19', 'Juxta', 'February 27, 2019'], ['europ.mp4', '3/4/19', 'Europ', 'March 4, 2019'], ['pothitsthenoggin.mp4', '3/10/19', 'PHTN', 'March 10, 2019'], ['sanmarrcoes.mp4', '3/15/19', 'San Marcos', 'March 15, 2019'], ['foammidea.mp4', '3/23/19', 'Foam Ideas', 'March 23, 2019'], ['lofstit.mp4', '3/25/19', 'Lost It', 'March 25, 2019'], ['forthelow.mp4', '3/27/19', 'For The Low', 'March 27, 2019'], ['survivaltactics.mp4', '4/6/19', 'Survival Tactics', 'April 6, 2019'], ['hawaii.mp4', '4/12/19', 'HawaII', 'April 12, 2019'], ['high.mp4', '5/6/19', 'High', 'May 6, 2019'], ['throwitup.mp4', '5/14/19', 'Throw It Up', 'April 14, 2019'], ['batmanyk.mp4', '5/17/19', 'You Know?', 'May 17, 2019'], ['newchoppa.mp4', '5/18/19', 'New Choppa', 'May 18, 2019'], ['bubbles.mp4', '5/24/19', 'Bubbles', 'May 24, 2019'], ['breakdown.mp4', '5/26/19', 'Weekend', 'May 26, 2019'], ['3st004.mp4', '6/2/19', '3sT', 'June 2, 2019'], ['bathalttheme.mp4', '6/12/19', 'ALT', 'June 12, 2019'], ['forconor.mp4', '6/16/19', '4CNR', 'June 16, 2019'], ['stepawf.mp4', '6/24/19', 'Step Off', 'June 24, 2019'], ['soalnoe.mp4', '7/16/19', 'So Alone', 'July 16, 2019'], ['6monthsinfilm.mp4', '7/17/19', '6 Months In 8mm', 'July 17, 2019'], ['coldsummers.mp4', '7/25/19', 'Cold Summers', 'July 25, 2019'], ['psnqs.mp4', '8/11/19', 'PSNQS', 'August 11, 2019'], ['mt11.mp4', '8/15/19', 'MT-1', 'August 15, 2019'], ['luvhrts.mp4', '8/22/19', 'Luv Hurts', 'August 22, 2019'], ['luftballons.mp4', '9/1/19', 'Luftballons', 'September 1, 2019'], ['vicrod.mp4', '9/7/19', 'Viceroy', 'September 7, 2019'], ['fcknlosers.mp4', '9/14/19', 'F*n Losers', 'September 14, 2019'], ['wishuwell.mp4', '9/19/19', 'WishUwell', 'September 19,2019'], ['youdontgetit.mp4', '9/23/19', 'The memo:1', 'September 23, 2019'], ['youtspsit.mp4', '9/24/19', 'The memo:2', 'September 24, 2019'], ['rcktman.mp4', '10/25/19', 'Rocketman', 'October 25, 2019'], ['savedat.mp4', '11/25/19', 'Save It', 'November 25, 2019'], ['denminsta.mp4', '12/21/19', 'Den Minsta', 'December 21, 2019'], ['colormeister.mp4', '1/8/20', 'Colormeister', 'January 8, 2020'], ['fwme.mp4', '1/24/20', 'F W Me', 'January 24, 2020'], ['widdem.mp4', '3/24/20', 'Widdem', 'March 24, 2020'], ['vanishd.mp4', '4/10/20', 'VanishD', 'April 10, 2020'], ['pixelskyline.mp4', '4/14/20', 'Pixel Skyline', 'April 14, 2020'], ['newhip.mp4', '5/16/20', 'New Whip', 'May 16, 2020'], ['nofront.mp4', '6/30/20', 'No Front', 'June 30, 2020'], ['how2talkk.mp4', '8/30/20', 'How 2 Talk', 'August 30, 2020'], ['asciimain.mp4', '10/31/20', 'ASCII', 'October 31, 2020'], ['cantcontrolme.mp4', '6/10/21', "Can't CTRL Me", 'June 10, 2021'], ['3500.mp4', '6/22/21', "3500", 'June 22, 2021'], ['ASTRO.mp4', '7/31/21', "Astro", 'July 31, 2021']];
var videoNum = videoData.length;
var videoNames = [];
var videoFilenames = [];
var videoDatesShort = [];
var videoDatesLong = [];

videoData.forEach(vid => {
    videoFilenames.push(vid[0]);
    videoDatesShort.push(vid[1]);
    videoNames.push(vid[2]);
    videoDatesLong.push(vid[3]);
});

var navSelectors = Array.from(document.getElementsByClassName('selectorBox'));
var headerIcons = Array.from(document.getElementsByClassName('headerIcon'));
var vidSelections = Array.from(document.getElementsByClassName('vidSelection'));
var vidSelectionDates = Array.from(document.getElementsByClassName('vidDate'));


vidSelections.forEach(vid => {
    vidNum = vidSelections.indexOf(vid);
    vid.src = 'assets/videos/' + videoFilenames[vidNum];
});

vidSelectionDates.forEach(date => {
    dateNum = vidSelectionDates.indexOf(date);
    date.innerHTML = videoDatesShort[dateNum];
});