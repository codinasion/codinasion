#include <vector> 

template <typename T>
int linear_search(std::vector<T> list, T val){
    for(int i = 0; i < list.size(); i++){
        if(list.at(i) == val){
            return i;
        }
    }
    return -1;
};

