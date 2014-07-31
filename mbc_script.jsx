/*************************************************************
 **** Author: Chris Olsen
 **** Date: 7/30/2014
 **** Description: "Movie Body Counts" script for internal 
 ****                         AdKarma use. Streamlines creation of
 ****                         videos for Movie Body Counts channel.
 **** Last revised: 7/31/2014
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
        countEffects();
        textEffects();
        reorderLayers();
            
            app.endUndoGroup("Creator");
        }



/*****************************
    create all solids
******************************/

    //fade out
    function createFade(){
        //addSolid //////verify brief duration! 2 seconds 12 frames
          var fadeOut = cur.layers.addSolid([0,0,0], "Fade Out", 1280, 720, 1, 2.5);
        
        
        
        //place layer at the end of footage
            //get  end of footage
            var fadeEnd = cur.layer(2).outPoint;
      
            //set end of fadeOut to end of footage
            fadeOut.outPoint = fadeEnd;
      
            var fadeStart = cur.layer(2).outPoint - 2.5;
            fadeOut.inPoint = fadeStart;
            
            //animate opacity
        fadeOut.opacity.setValueAtTime(fadeOut.inPoint,0);
        fadeOut.opacity.setValueAtTime(fadeOut.outPoint, 100);
        
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
        numMatte.property("Effects").property("CC Mr. Mercury").property(14).setValue(0.1);
        numMatte.property("Effects").property("CC Mr. Mercury").property(15).setValue(0.5);
     
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
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(14).setValue(0.1);
        ratingMatte.property("Effects").property("CC Mr. Mercury").property(15).setValue(0.5);
     
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
        var bc = cur.layers.addText("BODY COUNT:");
        //Remember to define font, size, position, etc.
        
        var textProp = bc.property("Source Text");
        var textDoc = textProp.value;
        bcText = "BODY COUNT:";
        textDoc.resetCharStyle();
        textDoc.fontSize = 117;
        textDoc.fillColor = [1, 1, 1];
        textDoc.font = "TradeGothic LT Bold";
        textDoc.text = bcText;
        textDoc.justification = ParagraphJustification.LEFT_JUSTIFY;
        textDoc.tracking = 0;
        textProp.setValue(textDoc);
       
        bc.transform.position.setValue([245.4,628.2]);
        bc.transform.anchorPoint.setValue([160,-10]);
       
        bc.comment = "COUNTER";
        }
    
    //Counter
    function createCount(){
        var counter = cur.layers.addText();
        counter.name = "counter";
        
        var countProp = counter.property("Source Text");
        var countDoc = countProp.value;
        countDoc.resetCharStyle();
        countDoc.fontSize = 117;
        countDoc.fillColor = [1, 1, 1];
        countDoc.font = "TradeGothic LT Bold";
        countDoc.justification = ParagraphJustification.LEFT_JUSTIFY;
        countDoc.tracking = 0;
        countProp.setValue(countDoc);
       
        counter.transform.position.setValue([761.2,638.6]);
      
      var glowA = cur.layers.addSolid([1,234/255,94/255], "Glow A Color", 1280,720,1);
            glowA.Effects.addProperty("Color Control");  
            glowA.property("Effects").property("Color Control").property(1).setValue([1,(234/255),(94/255),1]);
            glowA.property("Transform").property("Opacity").setValue(0);
     
     var glowB = cur.layers.addSolid([218/255,41/255,41/255], "Glow B Color", 1280,720,1);
             glowB.Effects.addProperty("Color Control");
             glowB.property("Effects").property("Color Control").property(1).setValue([(218/255),(41/255),(41/255),1]);
             glowB.property("Transform").property("Opacity").setValue(0)
        
         var glow1 = counter.Effects.addProperty("Glow");
         var glow2 = counter.Effects.addProperty("Glow");
         
//add this next line later, or else it will deactivate when moved into the precomp!      
      //  counter.property("Source Text").expression = "c = MBC_Comp.layer(\"Footage\"); count = 0; for (i=1;i<=c.marker.numKeys;i++) { if (c.marker.key(i).time > time ) break; count++;} count";
                                          
                                                                                
         counter.property("Effects").property("Glow").property(1).setValue(2);    
         counter.property("Effects").property("Glow").property(2).setValue(60);    
           counter.property("Effects").property("Glow").property(3).setValue(27);    
            counter.property("Effects").property("Glow").property(4).setValue(1.82);    
             counter.property("Effects").property("Glow").property(5).setValue(2);    
              counter.property("Effects").property("Glow").property(6).setValue(3);    
                counter.property("Effects").property("Glow").property(7).setValue(2);    
                 counter.property("Effects").property("Glow").property(8).setValue(3);
                 counter.property("Effects").property("Glow").property(9).setValue(1); 
                 counter.property("Effects").property("Glow").property(10).setValue(0); 
               counter.property("Effects").property("Glow").property(12).expression = "thisComp.layer(\"Glow A Color\").effect(\"Color Control\")(\"Color\")"; 
             counter.property("Effects").property("Glow").property(13).expression = "thisComp.layer(\"Glow B Color\").effect(\"Color Control\")(\"Color\")"; 
                 counter.property("Effects").property("Glow").property(14).setValue(1); 
                 
            counter.property("Effects").property("Glow 2").property(6).setValue(3);
            counter.property("Effects").property("Glow 2").property(7).setValue(2);
            counter.property("Effects").property("Glow 2").property(8).setValue(3);
            counter.property("Effects").property("Glow 2").property(9).setValue(1);
            counter.property("Effects").property("Glow 2").property(10).setValue(0);
            counter.property("Effects").property("Glow 2").property(12).expression = "[0,0,0,0]";
            counter.property("Effects").property("Glow 2").property(14).setValue(1);
         
            /*   
*/
         glowA.comment = "COUNTER";
         glowB.comment = "COUNTER";
        counter.comment = "COUNTER";
        
        }

    //Rating
    function createRating(){
        var rating = cur.layers.addText("Rating: \n");
        //Remember to add text for 
            var rGlowA = cur.layers.addSolid([135/255,0,0], "Rating Matte Glow Color A", 1280, 720,1);
            var rGlowB = cur.layers.addSolid([180/255,0,0], "Rating Matte Glow Color B", 1280, 720,1);
            rGlowA.Effects.addProperty("Color Control");
            rGlowB.Effects.addProperty("Color Control");
                rGlowA.property("Effects").property("Color Control").property(1).setValue([135/255,0,0]);
                rGlowB.property("Effects").property("Color Control").property(1).setValue([180/255,0,0]);
            rGlowA.property("Transform").property("Opacity").setValue(0);
            rGlowB.property("Transform").property("Opacity").setValue(0);
            
          var rGlow = rating.Effects.addProperty("Glow");
            
            rating.property("Effects").property("Glow").property(1).setValue(2);
            rating.property("Effects").property("Glow").property(2).setValue(80);
            rating.property("Effects").property("Glow").property(3).setValue(142);
            rating.property("Effects").property("Glow").property(4).setValue(3.4);
            rating.property("Effects").property("Glow").property(5).setValue(2);
            rating.property("Effects").property("Glow").property(6).setValue(3);
            rating.property("Effects").property("Glow").property(7).setValue(2);
            rating.property("Effects").property("Glow").property(8).setValue(3);
            rating.property("Effects").property("Glow").property(9).setValue(1);
            rating.property("Effects").property("Glow").property(10).setValue(0);
            rating.property("Effects").property("Glow").property(12).expression = "thisComp.layer(\"Rating Matte Glow Color A\").effect(\"Color Control\")(\"Color\")";
            rating.property("Effects").property("Glow").property(13).expression = "thisComp.layer(\"Rating Matte Glow Color B\").effect(\"Color Control\")(\"Color\")";
            rating.property("Effects").property("Glow").property(14).setValue(1);
 
//center text
var rateProp = rating.property("Source Text");
        var rateDoc = rateProp.value;
        rateDoc.resetCharStyle();
        rateDoc.font = "TradeGothic LT Bold";
        rateDoc.fontSize = 117;
        rateDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
        rateProp.setValue(rateDoc);
            
        rGlowA.comment = "TEXT";
        rGlowB.comment = "TEXT";
        rating.comment = "TEXT";
        }
    
    //Total count
    function createTotal(){
        var total = cur.layers.addText("Total Count");
            // Reposition and scale. Does this need anything else?
        
        
        total.comment = "END";
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
        // Holds total for use in end bumper
       numHolder.name = "Number Holder";
        
       numHolder.property("Source Text").expression = "num = comp(\"MBC_Comp\").layer(\"Footage\").marker.numKeys;"
        
       numHolder.comment = "NUMBER";
        
        
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
        numComp.width = 1280;
        numComp.height = 720;
        
        numComp.comment = "numComp";
     
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
        textComp.width = 1280;
        textComp.height = 720;
      
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
   
       countComp.width = 1280;
       countComp.height = 720;

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
               subComp.width = 1280;
               subComp.height = 720;
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
               endComp.width = 1280;
               endComp.height = 720;
        }
    
    
    
/****************************************************
    Add effects and expressions to 'text' precomp
*****************************************************/

function textEffects(){
    
    for (j=1;j<a.numItems;j++){
        if (a.item(j).name == "Text PreComp"){
            var textCompLocal = a.item(j);
            }
       // else if (a.item(j).comment == "numComp"){
       //    var numCompLocal = a.item(j);
        //    }
        }
    
        
    
    var numCompLocal = cur.layer(1).copyToComp(textCompLocal);
    cur.layer(1).remove();
    
    var glowBLocal = textCompLocal.layer(2);
    var glowALocal = textCompLocal.layer(3); 
    var numberLocal = textCompLocal.layer(6);
    var ratingLocal = textCompLocal.layer(5);
    var rateTextLocal = textCompLocal.layer(4);
    var totalLocal = textCompLocal.layer(1);
    
    glowALocal.moveToEnd();
    glowBLocal.moveToEnd();
    numberLocal.moveToBeginning();
    totalLocal.moveAfter(numberLocal);
    ratingLocal.moveAfter(totalLocal);
    rateTextLocal.moveAfter(ratingLocal);

    numberLocal.startTime = -3;
    ratingLocal.startTime = -3;
    
    totalLocal.trackMatteType = TrackMatteType.ALPHA;
    rateTextLocal.trackMatteType = TrackMatteType.ALPHA;
    
    rateTextLocal.property("Transform").property("Position").setValue([640,620]);
    rateTextLocal.property("Transform").property("Anchor Point").setValue([250,0]);
    totalLocal.property("Transform").property("Position").setValue([640,514]);
    
    totalLocal.Effects.addProperty("Glow");
            totalLocal.property("Effects").property("Glow").property(1).setValue(2);
            totalLocal.property("Effects").property("Glow").property(2).setValue(80);
            totalLocal.property("Effects").property("Glow").property(3).setValue(142);
            totalLocal.property("Effects").property("Glow").property(4).setValue(3.4);
            totalLocal.property("Effects").property("Glow").property(5).setValue(2);
            totalLocal.property("Effects").property("Glow").property(6).setValue(3);
            totalLocal.property("Effects").property("Glow").property(7).setValue(2);
            totalLocal.property("Effects").property("Glow").property(8).setValue(3);
            totalLocal.property("Effects").property("Glow").property(9).setValue(1);
            totalLocal.property("Effects").property("Glow").property(10).setValue(0);
            totalLocal.property("Effects").property("Glow").property(12).expression = "thisComp.layer(\"Rating Matte Glow Color A\").effect(\"Color Control\")(\"Color\")";
            totalLocal.property("Effects").property("Glow").property(13).expression = "thisComp.layer(\"Rating Matte Glow Color B\").effect(\"Color Control\")(\"Color\")";
            totalLocal.property("Effects").property("Glow").property(14).setValue(1);
    
}


/*
    Adobe After Effects 8.0 Keyframe Data

	Units Per Second	23.976
	Source Width	1280
	Source Height	720
	Source Pixel Aspect Ratio	1
	Comp Pixel Aspect Ratio	1

Effects	CC Mr. Mercury #1	Blob Birth Size #15
	Frame		
		0.149994	

Effects	CC Mr. Mercury #1	Blob Death Size #16
	Frame		
		0.5	


End of Keyframe Data

    
    
    */

/****************************************************
    Add effects and expressions to 'number' precomp
*****************************************************/

/****************************************************
    Add effects and expressions to 'count' precomp
*****************************************************/
function countEffects(){

    for (j=1; j < a.numItems;j++){
        if (a.item(j).name == "Counter PreComp" ){
 
            var countCompLocal = a.item(j);
       
            }
        }


var counterLocal = countCompLocal.layer(3);
    counterLocal.property("Source Text").expression = "c = comp(\"MBC_Comp\").layer(\"Footage\"); count = 0; for (i=1;i<=c.marker.numKeys;i++) { if (c.marker.key(i).time > time ) break; count++;} count";
    counterLocal.property("Effects").property("Glow").property(2).expression = "t=1;\
x=0;\
c=comp(\"MBC_Comp\").layer(\"Footage\");\
if (c.marker.numKeys > 0){\
  x=c.marker.nearestKey(time).index;\
  if (c.marker.key(x).time > time) x--;\
}\
if (x>0) t = time - c.marker.key(x).time;\
  amp = 100; \
  decay = 3.0; \
  scaleFact = (105 - amp  / Math.exp(decay * t)); \
  scaleFact;"
  
    counterLocal.property("Transform").property("Scale").expression = "\
  n = 0;\
  t = 0;\
c=comp(\"MBC_Comp\").layer(\"Footage\");\
  if (c.marker.numKeys > 0){ \
      n = c.marker.nearestKey(time).index; \
      if (c.marker.key(n).time > time) n--; \
  } \
  if (n > 0) t = time - c.marker.key(n).time; \
  amp = 45; \
  freq = 5; \
  decay = 7.0; \
  angle = freq * 2 * Math.PI * t; \
  scaleFact = (100 + amp * Math.sin(angle) / Math.exp(decay * t)) / 100; \
  [value[0] * scaleFact, value[1] / scaleFact];"
  
//Need to add expression to shut off glow intensity while threshold = 100  
  counterLocal.property("Effects").property("Glow").property(4).expression = "x=2;\
if (effect(\"Glow\")(\"Glow Threshold\").value > 85){\
x=linear(0.5,2.0,0.0);\
} else {\
x=2;\
}";
  
}

/****************************************************
    Add effects and expressions to 'sub_button' precomp
*****************************************************/

/****************************************************
    Add effects and expressions to 'end' precomp
*****************************************************/

/****************************************************
    Place layers in proper order
*****************************************************/
function reorderLayers(){
    
    $.writeln("Reorder Layers");
    }

/********************************************
    onClick controllers
********************************************/
locateBump.onClick = locBump;
locateSub.onClick = locSub;
locateClips.onClick = locClip;
locateGrid.onClick = locGrid;
createEverything.onClick = creator;