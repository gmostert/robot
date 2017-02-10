$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('feature\robot\robotMovement.feature');
formatter.feature({
  "line": 1,
  "name": "Moving a robot on a table",
  "description": "",
  "id": "moving-a-robot-on-a-table",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Give the robot commands before it has been placed",
  "description": "",
  "id": "moving-a-robot-on-a-table;give-the-robot-commands-before-it-has-been-placed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a robot thats not placed at on a table",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it gets a move warning message: Our brave little robot has not been placed on the table, it cant do anything yet :(",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the robot is turned left",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it gets a move warning message: Our brave little robot has not been placed on the table, it cant do anything yet :(",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "it gets a move warning message: Our brave little robot has not been placed on the table, it cant do anything yet :(",
  "keyword": "Then "
});
formatter.match({
  "location": "RobotMovement.newRobotNotOnTable()"
});
formatter.result({
  "duration": 191232846,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 101058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Our brave little robot has not been placed on the table, it cant do anything yet :(",
      "offset": 32
    }
  ],
  "location": "RobotMovement.robotWarningMessage(String)"
});
formatter.result({
  "duration": 4789190,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnLeft()"
});
formatter.result({
  "duration": 74215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Our brave little robot has not been placed on the table, it cant do anything yet :(",
      "offset": 32
    }
  ],
  "location": "RobotMovement.robotWarningMessage(String)"
});
formatter.result({
  "duration": 57635,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 78952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Our brave little robot has not been placed on the table, it cant do anything yet :(",
      "offset": 32
    }
  ],
  "location": "RobotMovement.robotWarningMessage(String)"
});
formatter.result({
  "duration": 60792,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Move the robot around the table",
  "description": "",
  "id": "moving-a-robot-on-a-table;move-the-robot-around-the-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "a robot thats placed at 0,0,NORTH on a table thats 5x5",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "its new location is 0,1,NORTH",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "its new location is 0,2,NORTH",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "its new location is 0,2,EAST",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "its new location is 1,2,EAST",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "its new location is 1,2,SOUTH",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "its new location is 1,1,SOUTH",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "its new location is 1,1,WEST",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "its new location is 0,1,WEST",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,NORTH",
      "offset": 24
    },
    {
      "val": "5",
      "offset": 51
    },
    {
      "val": "5",
      "offset": 53
    }
  ],
  "location": "RobotMovement.newRobotPlacedOnTable(String,int,int)"
});
formatter.result({
  "duration": 2109581,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 907546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,1,NORTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 105400,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 49739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,2,NORTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 79346,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 45792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,2,EAST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 61187,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,2,EAST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 51318,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 29212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,2,SOUTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 48160,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 27633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,1,SOUTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 49344,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 28423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,1,WEST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 69082,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 29606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,1,WEST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 52503,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Turn the robot 360 degrees around one spot on the table",
  "description": "",
  "id": "moving-a-robot-on-a-table;turn-the-robot-360-degrees-around-one-spot-on-the-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "a robot thats placed at 0,0,NORTH on a table thats 5x5",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the robot is turned left",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "its new location is 0,0,WEST",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the robot is turned left",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "its new location is 0,0,SOUTH",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "the robot is turned left",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "its new location is 0,0,EAST",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "the robot is turned left",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "its new location is 0,0,NORTH",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "its new location is 0,0,EAST",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "its new location is 0,0,SOUTH",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "its new location is 0,0,WEST",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "its new location is 0,0,NORTH",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,NORTH",
      "offset": 24
    },
    {
      "val": "5",
      "offset": 51
    },
    {
      "val": "5",
      "offset": 53
    }
  ],
  "location": "RobotMovement.newRobotPlacedOnTable(String,int,int)"
});
formatter.result({
  "duration": 188694,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnLeft()"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,WEST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 52898,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnLeft()"
});
formatter.result({
  "duration": 27238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,SOUTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 67109,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnLeft()"
});
formatter.result({
  "duration": 39081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,EAST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 107769,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnLeft()"
});
formatter.result({
  "duration": 53687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,NORTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 85267,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 42239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,EAST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 80135,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 54476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,SOUTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 86057,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 33160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,WEST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 55661,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 31976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,NORTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 356465,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Try and move the robot off the table and continue with other valid movements after",
  "description": "",
  "id": "moving-a-robot-on-a-table;try-and-move-the-robot-off-the-table-and-continue-with-other-valid-movements-after",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "a robot thats placed at 0,4,NORTH on a table thats 5x5",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "it gets a move warning message: Cant do that I\u0027m afraid, our brave little robot will fall of the table :(",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "its new location is 0,4,NORTH",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the robot is turned right",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "its new location is 0,4,EAST",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "the robot is moved",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "its new location is 1,4,EAST",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0,4,NORTH",
      "offset": 24
    },
    {
      "val": "5",
      "offset": 51
    },
    {
      "val": "5",
      "offset": 53
    }
  ],
  "location": "RobotMovement.newRobotPlacedOnTable(String,int,int)"
});
formatter.result({
  "duration": 179219,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 65530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cant do that I\u0027m afraid, our brave little robot will fall of the table :(",
      "offset": 32
    }
  ],
  "location": "RobotMovement.robotWarningMessage(String)"
});
formatter.result({
  "duration": 50134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,4,NORTH",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 89215,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotTurnRight()"
});
formatter.result({
  "duration": 41844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,4,EAST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 70266,
  "status": "passed"
});
formatter.match({
  "location": "RobotMovement.robotMove()"
});
formatter.result({
  "duration": 42239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,4,EAST",
      "offset": 20
    }
  ],
  "location": "RobotMovement.robotReportAfterMove(String)"
});
formatter.result({
  "duration": 70267,
  "status": "passed"
});
formatter.uri('feature\robot\robotPlacement.feature');
formatter.feature({
  "line": 1,
  "name": "Placing a robot on a table",
  "description": "",
  "id": "placing-a-robot-on-a-table",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Place a robot at various locations on the table",
  "description": "",
  "id": "placing-a-robot-on-a-table;place-a-robot-at-various-locations-on-the-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a robot and a table thats 5x5",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the robot is placed at 0,0,NORTH",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "it should be at 0,0,NORTH",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the robot is placed again this time at 1,1,NORTH",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "it should be at 1,1,NORTH",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the robot is placed outside the grid on the table 10,10,NORTH",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "it gets a placement warning message: Cant place robot at: 10,10,NORTH",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "it should be at 1,1,NORTH",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    },
    {
      "val": "5",
      "offset": 28
    }
  ],
  "location": "RobotPlacement.newRobot(int,int)"
});
formatter.result({
  "duration": 2261167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,NORTH",
      "offset": 23
    }
  ],
  "location": "RobotPlacement.robotPlaced(String)"
});
formatter.result({
  "duration": 271988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,0,NORTH",
      "offset": 16
    }
  ],
  "location": "RobotPlacement.robotReportAfterPlaced(String)"
});
formatter.result({
  "duration": 88426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,1,NORTH",
      "offset": 39
    }
  ],
  "location": "RobotPlacement.robotPlacedAgain(String)"
});
formatter.result({
  "duration": 93952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,1,NORTH",
      "offset": 16
    }
  ],
  "location": "RobotPlacement.robotReportAfterPlaced(String)"
});
formatter.result({
  "duration": 75004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10,10,NORTH",
      "offset": 50
    }
  ],
  "location": "RobotPlacement.robotPlacedAtInvalidLocation(String)"
});
formatter.result({
  "duration": 176851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cant place robot at: 10,10,NORTH",
      "offset": 37
    }
  ],
  "location": "RobotPlacement.robotWarningMessage(String)"
});
formatter.result({
  "duration": 61977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,1,NORTH",
      "offset": 16
    }
  ],
  "location": "RobotPlacement.robotReportAfterPlaced(String)"
});
formatter.result({
  "duration": 66714,
  "status": "passed"
});
formatter.uri('feature\robot\userCommands.feature');
formatter.feature({
  "line": 1,
  "name": "Resolving the user input to supported commands",
  "description": "",
  "id": "resolving-the-user-input-to-supported-commands",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Supported commands",
  "description": "",
  "id": "resolving-the-user-input-to-supported-commands;supported-commands",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the command service",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user types PLACE",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it should be resolved to the PLACE command",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user types MOVE",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it should be resolved to the MOVE command",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user types RIGHT",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "it should be resolved to the RIGHT command",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the user types LEFT",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "it should be resolved to the LEFT command",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user types REPORT",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "it should be resolved to the REPORT command",
  "keyword": "Then "
});
formatter.match({
  "location": "UserCommands.newRobotNotOnTable()"
});
formatter.result({
  "duration": 2663030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PLACE",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 438180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PLACE",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 93162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOVE",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 79741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOVE",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 62371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RIGHT",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 76188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RIGHT",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 72635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LEFT",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 110927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LEFT",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 80136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "REPORT",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 82504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "REPORT",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 76583,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Supported commands that does not match case exactly",
  "description": "",
  "id": "resolving-the-user-input-to-supported-commands;supported-commands-that-does-not-match-case-exactly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the command service",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user types place",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it should be resolved to the PLACE command",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the user types move",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it should be resolved to the MOVE command",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the user types right",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "it should be resolved to the RIGHT command",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the user types left",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "it should be resolved to the LEFT command",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the user types report",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "it should be resolved to the REPORT command",
  "keyword": "Then "
});
formatter.match({
  "location": "UserCommands.newRobotNotOnTable()"
});
formatter.result({
  "duration": 141323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "place",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 69082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PLACE",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 68293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "move",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 164614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOVE",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 78557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 66319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RIGHT",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 81715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 71451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LEFT",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 59213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "report",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 65924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "REPORT",
      "offset": 29
    }
  ],
  "location": "UserCommands.commandResolved(String)"
});
formatter.result({
  "duration": 53292,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Unsupported command",
  "description": "",
  "id": "resolving-the-user-input-to-supported-commands;unsupported-command",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "the command service",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user types TEST",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "it gives a command warning message: Unsupported command",
  "keyword": "Then "
});
formatter.match({
  "location": "UserCommands.newRobotNotOnTable()"
});
formatter.result({
  "duration": 92768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 15
    }
  ],
  "location": "UserCommands.commandIssued(String)"
});
formatter.result({
  "duration": 99084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unsupported command",
      "offset": 36
    }
  ],
  "location": "UserCommands.robotWarningMessage(String)"
});
formatter.result({
  "duration": 67504,
  "status": "passed"
});
});