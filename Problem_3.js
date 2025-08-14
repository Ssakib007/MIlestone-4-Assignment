/// create a function named bestTeam(). It will take the input as an object of the report of the game of two teams and will return which team was more fair.
/// the team who has the least foul + redCard + yellowCard will be awarded as the fair play team.
/// function will take two object inputs. every object will have four property of a team. name in string, foul in number, cardY in number, and cardR in number. 
/// function will return the property value of the name of the team with least foul+cardY+cardR. 
/// if both team ties, function will return "Tie"
/// if the inputs are not object, function will return Invalid.
//// sample input { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }  output Brazil 

/// Sample input { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 } output Tie

/// sample input { name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
/// output Invalid