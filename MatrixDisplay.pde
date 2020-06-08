  
  char testChar;
  
  public void setup()
  {
     fullScreen();

     testChar = 0x30b6;
    
  }
  
  public void draw()
  {
    textSize(height*.1);
    text(String.valueOf(testChar), width/2, height/2);
    
  }
  
