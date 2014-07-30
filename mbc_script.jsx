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

/*************************************************************
    ***********************************************************
    declare global variables
    ***********************************************************
*************************************************************/
var a = app.project;
var cur = app.project.activeItem;

/****************************
    draw GUI
****************************/
var win = new Window("palette", "MBC", undefined);
    var groupOne = win.add("group", undefined, "Controls");
        groupOne.orientation = "column";
    var locateBump = groupOne.add("button", undefined, "Locate bumper");
    var locateSub = groupOne.add("button", undefined, "Locate subscribe button");
    var locateClips = groupOne.add("button", undefined, "Locate clips for end bumper");
    var locateGrid = groupOne.add("button", undefined, "Locate grid for end bumper");
    
    var groupTwo = win.add("group", undefined, "Control2");
        groupTwo.orientation = "column";
    var createEverything = groupTwo.add("button", undefined, "Create everything!");
    
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

/****************************************************
    **************************************************
    Master function to call all creation functions
    **************************************************
*****************************************************/
    function creator(){
        
        createFade();
        createNumMatte();
        createRatingMatte();
        createBumpMatte();
        createSplat1();
        createSplat2();
        createBC();
        createCount();
        createRating();
        createTotal();
        createSub();
        createNumHolder();
        createPrecompText();
        createPrecompNumber();
        createPrecompCount();
        createPrecompSub();
        
        }



/*****************************
    create all solids
******************************/

    //fade out
    function createFade(){
        //addSolid //////verify brief duration! 2 seconds 12 frames
          var fadeOut = cur.layers.addSolid([0,0,0], "Fade Out", 1280, 720, 1, 2.5);
        
        //animate opacity
    //   fadeOut.expression
        
        
        }
    
    //number matte
    function createNumMatte(){
        
        
        }
    
    //rating matte
    function createRatingMatte(){
        
        
        }
    
    //end bumper matte
    function createBumpMatte(){
        
        
        
        }
    
    //splatter1
    function createSplat1(){
        
        
        }
    
    //splatter2
    function createSplat2(){
        
        
        }
    
    
    
 /*******************************
     create all text layers
 ********************************/

    //BODY COUNT:
    function createBC(){
        
        
        }
    
    //Counter
    function createCount(){
        
        
        }

    //Rating
    function createRating(){
        
        
        
        }
    
    //Total count
    function createTotal(){
        
        
        }
    
    //Subscribe
    function createSub(){
        
        
        }
    
    //numberHolder
    function createNumHolder(){
        
        
        }
    
    
    
    
/*****************************
    create all precomps
 ****************************/

////// NOTE:
////// Be sure to observe how precomping items affects their position in the project.
////// Is it best to precomp then add, or add then precomp?

    //text
    function createPrecompText(){
        
        
        }
    
    //number
    function createPrecompNumber(){
        
        
        }
    
    //count
    function createPrecompCount(){
        
        
        }

    //sub_button
    function createPrecompSub(){
        
        
        }
    
    
    
    
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
createEverything.onClick = creator;