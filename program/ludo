# include <iostream.h>
# include <graphics.h>
# include    <conio.h>
# include     <math.h>

void show_screen( );

void show_start(constint,constint);
void show_stay(constint,constint);
void show_player_positions(constint,constint,constint);

void Fill_rectangle(constint,constint,constint,constint);
void Rectangle(constint,constint,constint,constint);
void Line(constint,constint,constint,constint);
void Circle(constint,constint,constint);
void Polygon(constint,constint []);

int main( )
    {
       int driver=VGA;
       int mode=VGAHI;

       initgraph(&driver,&mode,"..\\Bgi");

       show_screen( );

       setcolor(8);
     Rectangle(126,44,516,434);

       setcolor(7);
     Fill_rectangle(126,44,516,434);

       setcolor(8);

       for(int count_1=6;count_1<10;count_1++)
      {
         Line((126+(count_1*26)),44,(126+(count_1*26)),434);
         Line(126,(44+(26*count_1)),516,(44+(26*count_1)));
      }

       for(int count_2=0;count_2<14;count_2++)
      {
         Line((152+(count_2*26)),201,(152+(count_2*26)),278);
         Line(282,(70+(26*count_2)),360,(70+(26*count_2)));
      }

       for(int count_3=0;count_3<15;count_3++)
      {
         setcolor((count_3+1));
           Rectangle((106+count_3),(24+count_3),(536-count_3),
                                  (454-count_3));

         if(count_3<10)
        {
           Rectangle((284+count_3),(202+count_3),(358-count_3),
                                  (276-count_3));

           Rectangle((128+count_3),(46+count_3),(280-count_3),
                                  (198-count_3));

           Rectangle((128+count_3),(280+count_3),(280-count_3),
                                  (432-count_3));

           Rectangle((362+count_3),(46+count_3),(514-count_3),
                                  (198-count_3));

           Rectangle((362+count_3),(280+count_3),(514-count_3),
                                  (432-count_3));
        }
      }

       setcolor(11);
     Fill_rectangle(294,212,348,266);

       setcolor(12);
     Fill_rectangle(138,56,270,188);

       show_player_positions(138,56,12);

       setcolor(9);
     Fill_rectangle(138,290,270,422);

       show_player_positions(138,290,9);

       setcolor(10);
     Fill_rectangle(372,56,504,188);

       show_player_positions(372,56,10);

       setcolor(14);
     Fill_rectangle(372,290,504,422);

       show_player_positions(372,290,14);

       for(int count_4=24;count_4>0;count_4--)
      {
         setcolor(count_4);
           Circle(321,239,count_4);
      }

       setcolor(6);

       for(int count_5=0;count_5<5;count_5++)
      Rectangle((121+count_5),(39+count_5),(521-count_5),(439-count_5));

       for(int count_6=0;count_6<5;count_6++)
      {
         setcolor(12);
           Fill_rectangle((152+(count_6*26)),226,(178+(count_6*26)),252);

         show_stay((152+(count_6*26)),226);
      }

       setcolor(12);
     Fill_rectangle(152,200,178,226);
     Fill_rectangle(178,252,204,278);

       show_stay(178,252);
       show_start(152,200);

       for(int count_7=0;count_7<5;count_7++)
      {
         setcolor(10);
           Fill_rectangle(308,(70+(count_7*26)),334,(96+(count_7*26)));

         show_stay(308,(70+(count_7*26)));
      }

       setcolor(10);
     Fill_rectangle(282,96,308,122);
     Fill_rectangle(334,70,360,96);

       show_stay(282,96);
       show_start(334,70);

       for(int count_8=0;count_8<5;count_8++)
      {
         setcolor(14);
           Fill_rectangle((490-(count_8*26)),226,(464-(count_8*26)),252);

         show_stay((464-(count_8*26)),226);
      }

       setcolor(14);
     Fill_rectangle(438,200,464,226);
     Fill_rectangle(464,252,490,278);

       show_stay(438,200);
       show_start(464,252);

       for(int count_9=0;count_9<5;count_9++)
      {
         setcolor(9);
           Fill_rectangle(308,(408-(count_9*26)),334,(382-(count_9*26)));

         show_stay(308,(382-(count_9*26)));
      }

       setcolor(9);
     Fill_rectangle(282,382,308,408);
     Fill_rectangle(334,356,360,382);

       show_stay(334,356);
       show_start(282,382);

       getch( );

       return 0;
    }

/*************************************************************************///---------------------  show_player_positions( )  ----------------------///*************************************************************************/void show_player_positions(constint x,constint y,constint color)
    {
       setcolor(0);
     Fill_rectangle((x+25),(y+25),(x+45),(y+45));
     Fill_rectangle((x+87),(y+25),(x+107),(y+45));
     Fill_rectangle((x+25),(y+87),(x+45),(y+107));
     Fill_rectangle((x+87),(y+87),(x+107),(y+107));

       char Start[2]={char(02),NULL};

       setcolor(color);
       settextstyle(0,0,1);
     outtextxy((x+32),(y+31),Start);
     outtextxy((x+94),(y+31),Start);
     outtextxy((x+32),(y+93),Start);
     outtextxy((x+94),(y+93),Start);

       for(int count=3;count<=8;count++)
      {
         setcolor(count);
           Circle((x+35),(y+35),(7+count));
           Circle((x+97),(y+35),(7+count));
           Circle((x+35),(y+97),(7+count));
           Circle((x+97),(y+97),(7+count));
      }
    }

/*************************************************************************///----------------------------  show_start( )  --------------------------///*************************************************************************/void show_start(constint x,constint y)
    {
       int hexagon[14]={ (x+13),(y+4), (x+22),(y+8), (x+22),(y+18),
             (x+13),(y+22), (x+4),(y+18), (x+4),(y+8),
             (x+13),(y+4) };

       char Start[2]={char(01),NULL};

       setcolor(0);
     Polygon(7,hexagon);

       settextstyle(0,0,1);
     outtextxy((x+10),(y+9),Start);
    }

/*************************************************************************///-----------------------------  show_stay( )  --------------------------///*************************************************************************/void show_stay(constint x,constint y)
    {
       int hexagon[14]={ (x+13),(y+4), (x+22),(y+8), (x+22),(y+18),
             (x+13),(y+22), (x+4),(y+18), (x+4),(y+8),
             (x+13),(y+4) };

       char Start[2]={char(04),NULL};

       setcolor(0);
     Polygon(7,hexagon);

       settextstyle(0,0,1);
     outtextxy((x+10),(y+10),Start);
    }

/*************************************************************************///-----------------------------  Polygon( )  ----------------------------///*************************************************************************/void Polygon(constint n,constint coordinates[])
    {
       if(n>=2)
      {
         Line(coordinates[0],coordinates[1],
                         coordinates[2],coordinates[3]);

         for(int count=1;count<(n-1);count++)
        Line(coordinates[(count*2)],coordinates[((count*2)+1)],
                        coordinates[((count+1)*2)],
                        coordinates[(((count+1)*2)+1)]);
      }
    }

/*************************************************************************///---------------------------  Rectangle( )  ----------------------------///*************************************************************************/void Rectangle(constint x_1,constint y_1,constint x_2,constint y_2)
    {
       Line(x_1,y_1,x_2,y_1);
       Line(x_2,y_1,x_2,y_2);
       Line(x_2,y_2,x_1,y_2);
       Line(x_1,y_2,x_1,y_1);
    }

/*************************************************************************///-------------------------  Fill_rectangle( )  -------------------------///*************************************************************************/void Fill_rectangle(constint x_1,constint y_1,constint x_2,constint y_2)
    {
       int y_min=((y_1>=y_2)?y_2:y_1);
       int y_max=((y_1<=y_2)?y_2:y_1);

       for(int count=(y_min+1);count<y_max;count++)
      Line((x_1+1),count,(x_2-1),count);
    }

/*************************************************************************///--------------------------------  Line( )  ----------------------------///*************************************************************************/void Line(constint x_1,constint y_1,constint x_2,constint y_2)
    {
       int color=getcolor( );

       int x1=x_1;
       int y1=y_1;

       int x2=x_2;
       int y2=y_2;

       if(x_1>x_2)
      {
         x1=x_2;
         y1=y_2;

         x2=x_1;
         y2=y_1;
      }

       int dx=abs(x2-x1);
       int dy=abs(y2-y1);
       int inc_dec=((y2>=y1)?1:-1);

       if(dx>dy)
      {
         int two_dy=(2*dy);
         int two_dy_dx=(2*(dy-dx));
         int p=((2*dy)-dx);

         int x=x1;
         int y=y1;

         putpixel(x,y,color);

         while(x<x2)
        {
           x++;

           if(p<0)
              p+=two_dy;

           else
              {
             y+=inc_dec;
             p+=two_dy_dx;
              }

           putpixel(x,y,color);
        }
      }

       else
      {
         int two_dx=(2*dx);
         int two_dx_dy=(2*(dx-dy));
         int p=((2*dx)-dy);

         int x=x1;
         int y=y1;

         putpixel(x,y,color);

         while(y!=y2)
        {
           y+=inc_dec;

           if(p<0)
              p+=two_dx;

           else
              {
             x++;
             p+=two_dx_dy;
              }

           putpixel(x,y,color);
        }
      }
    }

/*************************************************************************///-----------------------------  Circle( )  -----------------------------///*************************************************************************/void Circle(constint h,constint k,constint r)
    {
       int color=getcolor( );

       int x=0;
       int y=r;
       int p=(1-r);

       do
      {
         putpixel((h+x),(k+y),color);
         putpixel((h+y),(k+x),color);
         putpixel((h+y),(k-x),color);
         putpixel((h+x),(k-y),color);
         putpixel((h-x),(k-y),color);
         putpixel((h-y),(k-x),color);
         putpixel((h-y),(k+x),color);
         putpixel((h-x),(k+y),color);

         x++;

         if(p<0)
        p+=((2*x)+1);

         else
        {
           y--;
           p+=((2*(x-y))+1);
        }
      }
       while(x<=y);
    }

/*************************************************************************///--------------------------  show_screen( )  ---------------------------///*************************************************************************/void show_screen( )
    {
       setfillstyle(1,1);
     bar(268,2,372,14);

       settextstyle(0,0,1);
     setcolor(15);
       outtextxy(5,5,"********************************               *******************************");

     setcolor(11);
       outtextxy(273,5,"Luddo Board");

     setcolor(15);

       for(int count=0;count<=36;count++)
          outtextxy(5,(19+(count*12)),"*                                                                            *");

       outtextxy(5,467,"**************************                          **************************");

     setcolor(12);
       outtextxy(229,467,"Press any Key to exit.");
    }
