/* while
   条件式がtrueの間、{ }内の処理を繰り返す」ことができます 
   条件式の部分がいつかはfalseになり、繰り返し処理が終わるようにする。
   ループ処理が終わらないことを無限ループという*/
   let number = 1;
   
   while(number <= 10){
    console.log(number);
    number += 1;
   }

/* for (while文に比べてシンプルに書くことができるのが特徴です。)
   for(変数の定義;条件式;変数の更新)
   (例：for( let sum = 1; sum <= 15; sum += 1 )) */
   for( let sum = 1; sum <= 20; sum ++ ){
     console.log(sum);
   }

/* for + if (for文の中で特定の条件下では指定したものを表示できる) */
   for (let level = 1; level <= 30; level ++){
     if(level % 5 == 0){
       console.log("スキルアップが可能です");
     }
     else{
       console.log("レベルが上がりました");
     }
   }
  
/* 配列
   複数の値をまとめて管理するには、配列というものを用います。
   配列は、[値1, 値2, 値3] のように作ります。配列に入っているそれぞれの値のことを要素と呼びます。
   配列を代入する定数名は、慣習上複数形にすることが多い
   例：const fishes = ["たこ","いか","さめ"]*/
  const fishes = ["たこ","いか","さめ"];
  console.log(fishes);

  /* インデックス番号
     インデックス番号は、0から始まる */