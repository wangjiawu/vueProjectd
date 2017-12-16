//读取本地存储
//本地存储，存储的是字符串，所以要转换成对象

export function getData(){
    return JSON.parse(localStorage.getItem('goodslist') || '[]');

}

export function setData(json){
    //获取数据
    let data = getData();

    //设置数据
    //判断之前数据中是否有json.id

    let hasData = false; //假设没有json.id

    data.forEach(item => {
        if(item.id == json.id){
            hasData = true;
            //如果有就累加
            item.count += json.count;
        }
    });
    //如果没有就push
    if(!hasData){
        data.push(json);
    }

    localStorage.setItem('goodslist',JSON.stringify(data));
}

// 点击购物车的加减的时候，更新本地存储

export function update(json){
    let data = getData();
    data.forEach((item)=>{
        if(item.id == json.id){
        item.count += json.num;
        }   
    })
    localStorage.setItem('goodslist',JSON.stringify(data));
}

//点击删除按钮，
export function deleteData(id){
    //查找ID
  let data = getData();
  //循环查找数据ID
  let  index = data.findIndex((item)=>{
      return item.id = id;
  })
  data.splice(index,1);
  localStorage.setItem('goodslist',JSON.stringify(data));
}

