#include<stdio.h>

void selection_sort(int arr[], int n)
{
    int j;

    for(j=0; j<n-1; j++)
    {
        int min_idx=j;
        int i;
        for(i=j+1; i<n; i++)
        {
            if(arr[i]< arr[min_idx])
            {
                min_idx=i;
            }
        }

        int temp=arr[j];
        arr[j]=arr[min_idx];
        arr[min_idx]=temp;
    }

}

void insertion_sort(int arr[], int n)
{
    int i;
    for(i=1; i<n; i++)
    {
        int key= arr[i];
        int j=i-1;

        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--;

        }

        arr[j+1]= key;
    }
}

void bubble_sort(int arr[], int n)
{
    int i,j;
    for(i=0; i<n-1 ; i++)
    {
        for(j=0; j<n-1-i; j++)
        {
            if(arr[j] < arr[j+1])
            {
                int temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }

    }
}

int linear_search(int arr[], int n, int key)
{
    int i;
    for(i=0; i<n ;i++)
    {
        if(arr[i] == key)
        {
            return i;
        }
    }

    return -1;


}







int main()
{
    int arr[]={34,12,43,54,24};

    int n=sizeof(arr)/sizeof(arr[0]);

    selection_sort(arr,5);

    //insertion_sort(arr, n);

    // bubble_sort(arr,n);


    int i;
    for(i=0; i<n; i++)
    {
        printf("%d ", arr[i]);
    }

    printf("\n");

    int key= 25;
    int index =linear_search(arr,n,key);

    // printf("%d ", index);
}