async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList) 
  return await result
}

function test(data2) {

  return new Promise(function(resolve) {
    setTimeout(function(){
      data2.map( (data)=> { 
        const buildFullName = data.family_name + ' ' + data.first_name
        data['full_name'] = buildFullName
        // return data
      });
      resolve(data2);
    }, 3000);
  });
}
