/*************************************************************
 **** Author: Chris Olsen
 **** Date: 7/30/2014
 **** Description: "Movie Body Counts" script for internal 
 ****                         AdKarma use. Streamlines creation of
 ****                         videos for Movie Body Counts channel.
 **** Last revised: 7/30/2014
 **** 
 ****
 ************************************************************/

/****************************
    draw GUI
****************************/
var win = new Window("palette", "MBC", undefined);
    var groupOne = win.add("group", undefined, "Controls");
    var locateBump = win.add("button", undefined, "Locate bumper");
    var locateSub = win.add("button", undefined, "Locate subscribe button");
    var locateClips = win.add("button", undefined, "Locate clips for end bumper");
    var locateGrid = win.add("button", undefined, "Locate grid for end bumper");
    
    
 win.center();
 win.show();


/*****************************
    locate necessary files
*****************************/
    //locate bumper on fs
    function locBump(){
        alert ("Locate Bumper Button Pressed", "locBump");
        
        
        }
    //locate subscribe button on fs
    function locSub(){
        alert("Locate Subcribe button pressed", "locSub");
        
        
        }
    //locate clips for end bumper on fs
    function locClip(){
        alert("Locate clips button pressed", "locClip");
        
        
        }

    //locate grid for end bumper on fs
    function locGrid(){
        alert("Locate grid button pressed", "locGrid");
        
        
        }

/*****************************
    create all solids
******************************/

    //fade out

    //number matte
    
    //rating matte
    
    //end bumper matte
    
    //splatter1
    
    //splatter2
    
 /*******************************
     create all text layers
 ********************************/

    //BODY COUNT:

    //Counter

    //Rating

    //Total count

    //Subscribe

    //numberHolder

/*****************************
    create all precomps
 ****************************/

    //text

    //number

    //count

    //sub_button

/****************************************************
    Add effects and expressions to 'text' precomp
*****************************************************/

/****************************************************
    Add effects and expressions to 'number' precomp
*****************************************************/

/****************************************************
    Add effects and expressions to 'count' precomp
*****************************************************/

/****************************************************
    Add effects and expressions to 'sub_button' precomp
*****************************************************/






/********************************************
    onClick controllers
********************************************/
locateBump.onClick = locBump;
locateSub.onClick = locSub;
locateClips.onClick = locClip;
locateGrid.onClick = locGrid;