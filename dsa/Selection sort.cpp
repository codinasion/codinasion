#include<iostream>
#define size 4
using namespace std;

class select
{
	public:
		int arr[size];
		
		void get_data();
		void display();
		void selection_sort();
		
};

void select::get_data()
{
	for(int i=0;i<size;i++)
	{
		cout<<"Enter data : ";
		cin>>arr[i];
		
	}
}

void select::display()
{
	cout<<"\nSorted data \n\n";
	for(int i=0;i<size;i++)
	{
		cout<<arr[i]<<"\t";
		
	}
}

void select::selection_sort()
{
	int temp;
	int min;
	for(int i=0;i<size-1;i++)
	{
		min = i;
		
		for(int j=i+1;i<size;i++)
		{
			if(arr[j]<arr[min])
			{
				min = j;
				
			}
			
			if(min!=i)
		    {
		    	
			temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
			
		   }
		
		}
		
		
	}
}

int main()
{
	select s;
	s.get_data();
	s.selection_sort();
	s.display();
	
	return 0;
}
