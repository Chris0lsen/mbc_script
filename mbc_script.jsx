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
        
            //begin  undo group
            app.beginUndoGroup("Creator");
        
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
        createPrecompEnd();
            
            app.endUndoGroup("Creator");
        }



/*****************************
    create all solids
******************************/

    //fade out
    function createFade(){
        //addSolid //////verify brief duration! 2 seconds 12 frames
          var fadeOut = cur.layers.addSolid([0,0,0], "Fade Out", 1280, 720, 1, 2.5);
        
        //animate opacity
        fadeOut.opacity.setValueAtTime(0,0);
        fadeOut.opacity.setValueAtTime(2.5, 100);
        
        //place layer at the end of footage
            //get  end of footage
            //set end of fadeOut to end of footage
        
        }
    
    //number matte
    function createNumMatte(){
         //addSolid
        var numMatte = cur.layers.addSolid([1,1,1], "Number Matte", 1280, 720, 1);
    //   numMatte.isTrackMatte = true;
    ///    numMatte.trackMatteType.ALPHA;
        
        numMatte.Effects.addProperty("CC Mr. Mercury");
        numMatte.Effects.addProperty("Roughen Edges");
        //specify arguments for mr mercury
        numMatte.property("Effects").property("CC Mr. Mercury").property(1).setValue(85);
        numMatte.property("Effects").property("CC Mr. Mercury").property(2).setValue(42);
        numMatte.property("Effects").property("CC Mr. Mercury").property(3).setValue([640,360]);
        numMatte.property("Effects").property("CC Mr. Mercury").property(4).setValue(554);
        numMatte.property("Effects").property("CC Mr. Mercury").property(5).setValue(0.03);
        numMatte.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(0,7.09);
        numMatte.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(1,0);
        numMatte.property("Effects").property("CC Mr. Mercury").property(7).setValue(20.29);
        numMatte.property("Effects").property("CC Mr. Mercury").property(8).setValue(0);
        numMatte.property("Effects").property("CC Mr. Mercury").property(9).setValue(0);
        numMatte.property("Effects").property("CC Mr. Mercury").property(10).setValue(2.5);
        numMatte.property("Effects").property("CC Mr. Mercury").property(11).setValue(1);
        numMatte.property("Effects").property("CC Mr. Mercury").property(12).setValue(68/100);
        numMatte.property("Effects").property("CC Mr. Mercury").property(13).setValue(3);
        numMatte.property("Effects").property("CC Mr. Mercury").property(14).setValue(0.15);
     
         //specify arguments for roughen edges
         numMatte.property("Effects").property("Roughen Edges").property(1).setValue(4);
         numMatte.property("Effects").property("Roughen Edges").property(3).setValue(60);
         numMatte.property("Effects").property("Roughen Edges").property(4).setValue(0.43);
         numMatte.property("Effects").property("Roughen Edges").property(5).setValue(0.54);
         numMatte.property("Effects").property("Roughen Edges").property(6).setValue(100);
         numMatte.property("Effects").property("Roughen Edges").property(7).setValue(0);
         numMatte.property("Effects").property("Roughen Edges").property(8).setValue([0,-202]);
         numMatte.property("Effects").property("Roughen Edges").property(9).setValue(9);
         numMatte.property("Effects").property("Roughen Edges").property(10).setValue(474);
     
         numMatte.comment = "TEXT";
        
        }
    
    //rating matte
    function createRatingMatte(){
        var ratingMatte = cur.layers.addSolid([1,1,1], "Rating Matte", 1280, 720, 1);

        ratingMatte.Effects.addProperty("CC Mr. Mercury");
        ratingMatte.Effects.addProperty("Roughen Edges");
        //specify arguments for mr mercury
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(1).setValue(85);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(2).setValue(42);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(3).setValue([640,360]);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(4).setValue(554);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(5).setValue(0.03);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(0,7.09);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(1,0);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(7).setValue(20.29);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(8).setValue(0);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(9).setValue(0);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(10).setValue(2.5);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(11).setValue(1);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(12).setValue(68/100);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(13).setValue(3);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(14).setValue(0.15);
     
         //specify arguments for roughen edges
         ratingMatte.property("Effects").property("Roughen Edges").property(1).setValue(4);
         ratingMatte.property("Effects").property("Roughen Edges").property(3).setValue(60);
         ratingMatte.property("Effects").property("Roughen Edges").property(4).setValue(0.43);
         ratingMatte.property("Effects").property("Roughen Edges").property(5).setValue(0.54);
         ratingMatte.property("Effects").property("Roughen Edges").property(6).setValue(100);
         ratingMatte.property("Effects").property("Roughen Edges").property(7).setValue(0);
         ratingMatte.property("Effects").property("Roughen Edges").property(8).setValue([0,-202]);
         ratingMatte.property("Effects").property("Roughen Edges").property(9).setValue(9);
         ratingMatte.property("Effects").property("Roughen Edges").property(10).setValue(474);
        
        ratingMatte.comment = "TEXT";
        }
    
    //end bumper matte
    function createBumpMatte(){
        var bumpMatte = cur.layers.addSolid([1,1,1], "Bumper Matte", 1280, 720, 1);
        
        
            bumpMatte.Effects.addProperty("CC Mr. Mercury");
            bumpMatte.Effects.addProperty("Roughen Edges");
            
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(1).setValue(85);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(2).setValue(42);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(3).setValue([640,360]);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(4).setValue(554);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(5).setValue(0.03);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(0,7.09);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(1,0);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(7).setValue(20.29);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(8).setValue(0);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(9).setValue(0);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(10).setValue(2.5);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(11).setValue(1);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(12).setValue(68/100);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(13).setValue(3);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(14).setValue(0.15);
        bumpMatte.property("Effects").property("CC Mr. Mercury").property(15).setValue(0.50);
           
         bumpMatte.property("Effects").property("Roughen Edges").property(1).setValue(4);
         bumpMatte.property("Effects").property("Roughen Edges").property(3).setValue(60);
         bumpMatte.property("Effects").property("Roughen Edges").property(4).setValue(0.43);
         bumpMatte.property("Effects").property("Roughen Edges").property(5).setValue(0.54);
         bumpMatte.property("Effects").property("Roughen Edges").property(6).setValue(100);
         bumpMatte.property("Effects").property("Roughen Edges").property(7).setValue(0);
         bumpMatte.property("Effects").property("Roughen Edges").property(8).setValue([0,-202]);
         bumpMatte.property("Effects").property("Roughen Edges").property(9).setValue(9);
         bumpMatte.property("Effects").property("Roughen Edges").property(10).setValue(474);           
           
           bumpMatte.comment = "END";
        }
    
    //splatter1
    function createSplat1(){
            var splatter1 = cur.layers.addSolid([1,1,1], "Splatter 1", 1280, 720,1, 6.5);
        
            splatter1.Effects.addProperty("CC Mr. Mercury");
            splatter1.Effects.addProperty("Tint");
            splatter1.Effects.addProperty("Fast Blur");
        
        splatter1.property("Effects").property("CC Mr. Mercury").property(1).setValue(46);
        splatter1.property("Effects").property("CC Mr. Mercury").property(2).setValue(33);
        splatter1.property("Effects").property("CC Mr. Mercury").property(3).setValue([640,360]);
        splatter1.property("Effects").property("CC Mr. Mercury").property(4).setValue(0);
        splatter1.property("Effects").property("CC Mr. Mercury").property(5).setValue(0);
        splatter1.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(0,7.09);
        splatter1.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(1/24,0);
        splatter1.property("Effects").property("CC Mr. Mercury").property(7).setValue(5.5);
        splatter1.property("Effects").property("CC Mr. Mercury").property(8).setValue(0.1);
        splatter1.property("Effects").property("CC Mr. Mercury").property(9).setValue(2);
        splatter1.property("Effects").property("CC Mr. Mercury").property(10).setValue(0.7);
        splatter1.property("Effects").property("CC Mr. Mercury").property(11).setValue(1);
        splatter1.property("Effects").property("CC Mr. Mercury").property(12).setValue(6/100);
        splatter1.property("Effects").property("CC Mr. Mercury").property(13).setValue(3);
        splatter1.property("Effects").property("CC Mr. Mercury").property(14).setValue(0.2);
        splatter1.property("Effects").property("CC Mr. Mercury").property(15).setValue(0.2);
  
        splatter1.property("Effects").property("Tint").property(1).setValue([0,0,0]);
        splatter1.property("Effects").property("Tint").property(2).setValue([255,255,255]);
        splatter1.property("Effects").property("Tint").property(3).setValue(8);
        
        splatter1.property("Effects").property("Fast Blur").property(1).setValue(10);

      

        
            splatter1.comment = "END";
        }
    
    //splatter2
    function createSplat2(){
                var splatter2 = cur.layers.addSolid([1,1,1], "Splatter 2", 1280, 720,1, 6.5);


            splatter2.Effects.addProperty("CC Mr. Mercury");
            splatter2.Effects.addProperty("Tint");
            splatter2.Effects.addProperty("Fast Blur");
        
        splatter2.property("Effects").property("CC Mr. Mercury").property(1).setValue(46);
        splatter2.property("Effects").property("CC Mr. Mercury").property(2).setValue(33);
        splatter2.property("Effects").property("CC Mr. Mercury").property(3).setValue([640,360]);
        splatter2.property("Effects").property("CC Mr. Mercury").property(4).setValue(0);
        splatter2.property("Effects").property("CC Mr. Mercury").property(5).setValue(0);
        splatter2.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(0,7.09);
        splatter2.property("Effects").property("CC Mr. Mercury").property(6).setValueAtTime(1/24,0);
        splatter2.property("Effects").property("CC Mr. Mercury").property(7).setValue(5.5);
        splatter2.property("Effects").property("CC Mr. Mercury").property(8).setValue(0.2);
        splatter2.property("Effects").property("CC Mr. Mercury").property(9).setValue(2);
        splatter2.property("Effects").property("CC Mr. Mercury").property(10).setValue(0);
        splatter2.property("Effects").property("CC Mr. Mercury").property(11).setValue(2);
        splatter2.property("Effects").property("CC Mr. Mercury").property(12).setValue(4/100);
        splatter2.property("Effects").property("CC Mr. Mercury").property(13).setValue(3);
        splatter2.property("Effects").property("CC Mr. Mercury").property(14).setValue(0.2);
        splatter2.property("Effects").property("CC Mr. Mercury").property(15).setValue(0.2);
  
        splatter2.property("Effects").property("Tint").property(1).setValue([0,0,0]);
        splatter2.property("Effects").property("Tint").property(2).setValue([255,255,255]);
        splatter2.property("Effects").property("Tint").property(3).setValue(32);
        
        splatter2.property("Effects").property("Fast Blur").property(1).setValue(15);
        splatter2.property("Effects").property("Fast Blur").property(3).setValue(1);



                splatter2.comment = "END";
        }
    
    
    
 /*******************************
     create all text layers
 ********************************/

    //BODY COUNT:
    function createBC(){
        var bc = cur. layers.addText("Body Count: ");
        //Remember to define font, size, position, etc.
        
        bc.comment = "COUNTER";
        }
    
    //Counter
    function createCount(){
        var counter = cur.layers.addText();
        //Remember to add expression here for source text! 
        
        counter.comment = "COUNTER";
        $.writeln(counter.comment);
        }

    //Rating
    function createRating(){
        var rating = cur.layers.addText("Rating: \n");
        //Remember to add text for 
        
        rating.comment = "TEXT";
        }
    
    //Total count
    function createTotal(){
        var total = cur.layers.addText("Total Count");
            // Reposition and scale. Does this need anything else?
        
        
        total.comment = "TEXT";
        }
    
    //Subscribe
    function createSub(){
        var subscribe = cur.layers.addText("Subscribe");
        //Position, Rotation, Scale
        
        subscribe.comment = "SUB";
        }
    
    //numberHolder
    function createNumHolder(){
        var numHolder = cur.layers.addText();
        // I don't even remember what this does.
        
        
            numHolder.comment = "NUMBER";
        
        
        alert("all good");
        }
    
    
    
    
/*****************************
    create all precomps
 ****************************/

////// NOTE:
////// Be sure to observe how precomping items affects their position in the project.
////// Is it best to precomp then add, or add then precomp?
  
  
  //number
  
  //number has to happen first, because it's contained within text
  function createPrecompNumber(){
                var numSelection = new Array();       

        for (i = 1; i < cur.numLayers; i++){
            if (cur.layer(i).comment == "NUMBER"){
                 numSelection[numSelection.length] = cur.layer(i).index;
            } else{
                continue;
            }
        }  
      
       var numComp = cur.layers.precompose(numSelection, "Number PreComp", true);
        
        }  
    
    //text
    function createPrecompText(){
        var textSelection = new Array();       

        for (i = 1; i < cur.numLayers; i++){
            if (cur.layer(i).comment == "TEXT"){
                 textSelection[textSelection.length] = cur.layer(i).index;
            } else{
                continue;
            }
        }  
      
       var textComp = cur.layers.precompose(textSelection, "Text PreComp", true);
      
        }
    
  
    //count
    function createPrecompCount(){
            var countSelection = new Array();
        

        for (i = 1; i < cur.numLayers; i++){
            if (cur.layer(i).comment == "COUNTER"){
                 countSelection[countSelection.length] = cur.layer(i).index;
            } else{
                continue;
            }
        }
        
         var countComp = cur.layers.precompose(countSelection, "Counter PreComp", true);      
        }

    //sub_button
    function createPrecompSub(){
            var subSelection = new Array();
        

        for (i = 1; i < cur.numLayers; i++){
            if (cur.layer(i).comment == "SUB"){
                 subSelection[subSelection.length] = cur.layer(i).index;
            } else{
                continue;
            }
        }
        
        
               var subComp = cur.layers.precompose(subSelection, "Subscribe PreComp", true);
        }
    
    
    //end bumper
        function createPrecompEnd(){
            var endSelection = new Array();
        

        for (i = 1; i < cur.numLayers; i++){
            if (cur.layer(i).comment == "END"){
                 endSelection[endSelection.length] = cur.layer(i).index;
            } else{
                continue;
            }
        }
        
        
               var endComp = cur.layers.precompose(endSelection, "End PreComp", true);
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

/****************************************************
    Add effects and expressions to 'end' precomp
*****************************************************/




/********************************************
    onClick controllers
********************************************/
locateBump.onClick = locBump;
locateSub.onClick = locSub;
locateClips.onClick = locClip;
locateGrid.onClick = locGrid;
createEverything.onClick = creator;