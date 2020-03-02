const classFriendsAges = [12, 14, 16, 13, 17];
const othersFriendsAges = [15, 16, 12];

//const allAges = classFriendsAges.concat(othersFriendsAges);
const allAges = [...classFriendsAges, ...othersFriendsAges, 5]
//console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;

const money = [650, 450, 250];
//console.log(Math.max(business, minister, sochib));
console.log(Math.max(...money));