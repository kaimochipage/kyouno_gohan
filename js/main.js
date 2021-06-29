'use strict';

{

 const btn = document.getElementById('btn');

 btn.addEventListener('click', () => {
   const results = ['カレー', '餃子', '親子丼', '牛肉', '豚肉', 'ケンタッキー', 'ラーメン', '和食', '洋食', '中華', 'お寿司', 'UberEats', 'ハンバーグ', '唐揚げ','生姜焼き', '肉じゃが', '麻婆豆腐', 'トンカツ', 'お刺身', '焼き魚', '煮魚', '焼小籠包', 'ハヤシライス', 'ドミノピザ', 'ロールキャベツ', 'ポテトサラダ', 'ペペロンチーノ', 'キムチ鍋', 'ナポリタン', '鯖味噌', 'アジフライ', 'ごはんぬき'];
   btn.textContent = results[Math.floor(Math.random() * results.length)];
 });



}