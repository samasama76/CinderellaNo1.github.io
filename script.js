const VIDEO_LIST = [
  { name: "安部菜々", url: "https://youtu.be/ffYNgHois6g&t=573" },
  { name: "佐藤 心", url: "https://youtu.be/ffYNgHois6g&t=1278" },
  { name: "神崎蘭子", url: "https://youtu.be/w5nG-qcYplQ&t=440" },
  { name: "二宮飛鳥", url: "https://youtu.be/w5nG-qcYplQ&t=1124" },
  { name: "イヴ・サンタクロース", url: "https://youtu.be/dLygmC0mPaU&t=807" },
  { name: "望月 聖", url: "https://youtu.be/dLygmC0mPaU&t=1596" },
  { name: "大石 泉", url: "https://youtu.be/BIOiD2zpceQ&t=626" },
  { name: "八神マキノ", url: "https://youtu.be/BIOiD2zpceQ&t=1453" },
  { name: "土屋亜子", url: "https://youtu.be/y9fZetedub0&t=565" },
  { name: "村松さくら", url: "https://youtu.be/y9fZetedub0&t=1081" },
  { name: "早坂美玲", url: "https://youtu.be/bZQO671oBxY&t=647" },
  { name: "星 輝子", url: "https://youtu.be/bZQO671oBxY&t=1541" },
  { name: "関 裕美", url: "https://youtu.be/M07S7j5Dbq0&t=683" },
  { name: "森久保乃々", url: "https://youtu.be/M07S7j5Dbq0&t=1619" },
  { name: "原田美世", url: "https://youtu.be/lefIOY5UfVY&t=602" },
  { name: "乙倉悠貴", url: "https://youtu.be/lefIOY5UfVY&t=1196" },
  { name: "久川 颯", url: "https://youtu.be/79ghMn-_xcU&t=803" },
  { name: "久川 凪", url: "https://youtu.be/79ghMn-_xcU&t=1797" },
  { name: "黒埼ちとせ", url: "https://youtu.be/vSJcFSc3H4c&t=618" },
  { name: "白雪千夜", url: "https://youtu.be/vSJcFSc3H4c&t=1409" },
  { name: "綾瀬穂乃香", url: "https://youtu.be/EiKXo7vE-P4&t=498" },
  { name: "工藤 忍", url: "https://youtu.be/EiKXo7vE-P4&t=1119" },
  { name: "喜多見 柚", url: "https://youtu.be/LYKw7Ev_lbI&t=534" },
  { name: "桃井あずき", url: "https://youtu.be/LYKw7Ev_lbI&t=1038" },
  { name: "瀬名詩織", url: "https://youtu.be/ZAWSi1d7TN4&t=564" },
  { name: "浅利七海", url: "https://youtu.be/ZAWSi1d7TN4&t=1261" },
  { name: "辻野あかり", url: "https://youtu.be/WDECBHS9AZ8&t=684" },
  { name: "前川みく", url: "https://youtu.be/WDECBHS9AZ8&t=1194" },
  { name: "砂塚あきら", url: "https://youtu.be/XM-9npb8Lio&t=629" },
  { name: "夢見りあむ", url: "https://youtu.be/XM-9npb8Lio&t=1660" },
  { name: "堀 裕子", url: "https://youtu.be/G_uM1BhDKzs&t=590" },
  { name: "日野 茜", url: "https://youtu.be/G_uM1BhDKzs&t=1202" },
  { name: "及川 雫", url: "https://youtu.be/SRQReFi9zYw&t=692" },
  { name: "片桐早苗", url: "https://youtu.be/SRQReFi9zYw&t=1350" },
  { name: "海老原菜帆", url: "https://youtu.be/n8xxVARYGvE&t=646" },
  { name: "榊原里美", url: "https://youtu.be/n8xxVARYGvE&t=1282" },
  { name: "十時愛梨", url: "https://youtu.be/W8yhKdRMNu0&t=525" },
  { name: "槙原志保", url: "https://youtu.be/W8yhKdRMNu0&t=1071" },
  { name: "棟方愛海", url: "https://youtu.be/sqODR-nPizU&t=645" },
  { name: "柳 清良", url: "https://youtu.be/sqODR-nPizU&t=1268" },
  { name: "向井拓海", url: "https://youtu.be/yUvBAFQTsNg&t=601" },
  { name: "藤本里奈", url: "https://youtu.be/yUvBAFQTsNg&t=1411" },
  { name: "多田李衣菜", url: "https://youtu.be/8WsP2_0z-3U&t=493" },
  { name: "木村夏樹", url: "https://youtu.be/8WsP2_0z-3U&t=1093" },
  { name: "松本沙理奈", url: "https://youtu.be/xXtLigLURSE&t=487" },
  { name: "水木聖來", url: "https://youtu.be/xXtLigLURSE&t=1112" },
  { name: "太田 優", url: "https://youtu.be/XMC5GSY-zFE&t=470" },
  { name: "大西由里子", url: "https://youtu.be/XMC5GSY-zFE&t=1122" },
  { name: "荒木比奈", url: "https://youtu.be/cx-pl-2LeKo&t=711" },
  { name: "上条春菜", url: "https://youtu.be/cx-pl-2LeKo&t=1490" },
  { name: "遊佐こずえ", url: "https://youtu.be/c0WLka4NNlw&t=664" },
  { name: "佐城雪美", url: "https://youtu.be/c0WLka4NNlw&t=1495" },
  { name: "的場梨沙", url: "https://youtu.be/XvEnprw1LI8&t=614" },
  { name: "結城 晴", url: "https://youtu.be/XvEnprw1LI8&t=1292" },
  { name: "長富蓮実", url: "https://youtu.be/vwlf3V5qvuw&t=583" },
  { name: "楊 菲菲", url: "https://youtu.be/vwlf3V5qvuw&t=1090" },
  { name: "三船美優", url: "https://youtu.be/EG_0OBjgjzc&t=950" },
  { name: "和久井留美", url: "https://youtu.be/EG_0OBjgjzc&t=1545" },
  { name: "双葉 杏", url: "https://youtu.be/9O4-DskWBqM&t=670" },
  { name: "諸星きらり", url: "https://youtu.be/9O4-DskWBqM&t=1156" },
  { name: "相葉夕美", url: "https://youtu.be/vFgGktTr30Q&t=559" },
  { name: "西園寺琴歌", url: "https://youtu.be/vFgGktTr30Q&t=1355" },
  { name: "赤城みりあ", url: "https://youtu.be/004yrhzv53I&t=584" },
  { name: "市原仁奈", url: "https://youtu.be/004yrhzv53I&t=1147" },
  { name: "高垣 楓", url: "https://youtu.be/hVtxgmRvTK0&t=545" },
  { name: "速水 奏", url: "https://youtu.be/hVtxgmRvTK0&t=1246" },
  { name: "財前時子", url: "https://youtu.be/wr2mxx_M7ds&t=642" },
  { name: "椎名法子", url: "https://youtu.be/wr2mxx_M7ds&t=1352" },
  { name: "中野有香", url: "https://youtu.be/-xMJrtRyjuQ&t=537" },
  { name: "水本ゆかり", url: "https://youtu.be/-xMJrtRyjuQ&t=1182" },
  { name: "浅野風香", url: "https://youtu.be/ED5ASTHYlQo&t=577" },
  { name: "奥山沙織", url: "https://youtu.be/ED5ASTHYlQo&t=1192" },
  { name: "日下部若葉", url: "https://youtu.be/-ql7ff5iksw&t=747" },
  { name: "栗原ネネ", url: "https://youtu.be/-ql7ff5iksw&t=1331" },
  { name: "桐生つかさ", url: "https://youtu.be/Z4SGHMUl8n8&t=582" },
  { name: "高峯のあ", url: "https://youtu.be/Z4SGHMUl8n8&t=1207" },
  { name: "木場真奈美", url: "https://youtu.be/bi25KWfi6xc&t=587" },
  { name: "篠原 礼", url: "https://youtu.be/bi25KWfi6xc&t=1204" },
  { name: "川島瑞樹", url: "https://youtu.be/M8q_5POWjhs&t=542" },
  { name: "村上 巴", url: "https://youtu.be/M8q_5POWjhs&t=1241" },
  { name: "桐野アヤ", url: "https://youtu.be/RySQL0_pDdo&t=512" },
  { name: "小室千奈美", url: "https://youtu.be/RySQL0_pDdo&t=1093" },
  { name: "高橋礼子", url: "https://youtu.be/fukxL3y5ZW8&t=489" },
  { name: "柊 志乃", url: "https://youtu.be/fukxL3y5ZW8&t=1027" },
  { name: "黒川千秋", url: "https://youtu.be/wPSpZcm2xSU&t=451" },
  { name: "水野 翠", url: "https://youtu.be/wPSpZcm2xSU&t=1066" },
  { name: "東郷あい", url: "https://youtu.be/eEDnCpXB2LQ&t=571" },
  { name: "龍崎 薫", url: "https://youtu.be/eEDnCpXB2LQ&t=1099" },
  { name: "相川千夏", url: "https://youtu.be/8bzLB0nPUfE&t=518" },
  { name: "大槻 唯", url: "https://youtu.be/8bzLB0nPUfE&t=1123" },
  { name: "首藤 葵", url: "https://youtu.be/W7imErfjnro&t=497" },
  { name: "丹羽仁美", url: "https://youtu.be/W7imErfjnro&t=1151" },
  { name: "浜口あやめ", url: "https://youtu.be/6f-PNeqtLgw&t=577" },
  { name: "大和亜季", url: "https://youtu.be/6f-PNeqtLgw&t=1198" },
  { name: "道明寺歌鈴", url: "https://youtu.be/8y55beSO8ko&t=722" },
  { name: "脇山珠美", url: "https://youtu.be/8y55beSO8ko&t=1427" },
  { name: "白菊ほたる", url: "https://youtu.be/pezA-7XRfAs&t=774" },
  { name: "鷹富士茄子", url: "https://youtu.be/pezA-7XRfAs&t=1620" },
  { name: "藤原 肇", url: "https://youtu.be/QqrdadunXR4&t=713" },
  { name: "依田芳乃", url: "https://youtu.be/QqrdadunXR4&t=1467" },
  { name: "今井加奈", url: "https://youtu.be/BNxBUdueQfI&t=571" },
  { name: "矢口美羽", url: "https://youtu.be/BNxBUdueQfI&t=1322" },
  { name: "上田鈴帆", url: "https://youtu.be/Ez8jLtD1NRY&t=654" },
  { name: "難波笑美", url: "https://youtu.be/Ez8jLtD1NRY&t=1422" },
  { name: "赤西瑛梨華", url: "https://youtu.be/6sIBUnKG-gY&t=455" },
  { name: "野々村そら", url: "https://youtu.be/6sIBUnKG-gY&t=1053" },
  { name: "キャシー・グラハム", url: "https://youtu.be/nztdI3f4zFc&t=538" },
  { name: "ケイト", url: "https://youtu.be/nztdI3f4zFc&t=1152" },
  { name: "ナターリア", url: "https://youtu.be/VN3NQCSDsV8&t=527" },
  { name: "ライラ", url: "https://youtu.be/VN3NQCSDsV8&t=1382" },
  { name: "江上 椿", url: "https://youtu.be/5bJSMe-T4-A&t=625" },
  { name: "相馬夏美", url: "https://youtu.be/5bJSMe-T4-A&t=1213" },
  { name: "伊集院 惠", url: "https://youtu.be/BiUJk-l7YXE&t=577" },
  { name: "並木芽衣子", url: "https://youtu.be/BiUJk-l7YXE&t=1202" },
  { name: "持田亜里沙", url: "https://youtu.be/JlBs1gWDZTM&t=563" },
  { name: "柳瀬美由紀", url: "https://youtu.be/JlBs1gWDZTM&t=1279" },
  { name: "緒方智絵里", url: "https://youtu.be/S-dOFtj7Y_Q&t=679" },
  { name: "三村かな子", url: "https://youtu.be/S-dOFtj7Y_Q&t=1170" },
  { name: "喜多日菜子", url: "https://youtu.be/uZyO_4LStW8&t=653" },
  { name: "佐久間まゆ", url: "https://youtu.be/uZyO_4LStW8&t=1262" },
  { name: "斉藤洋子", url: "https://youtu.be/YB72HjrWKI4&t=618" },
  { name: "真鍋いつき", url: "https://youtu.be/YB72HjrWKI4&t=1364" },
  { name: "姫川友紀", url: "https://youtu.be/DraYbKbxXSg&t=477" },
  { name: "若林智香", url: "https://youtu.be/DraYbKbxXSg&t=1035" },
  { name: "仙崎恵磨", url: "https://youtu.be/9A4o5SpEMys&t=454" },
  { name: "吉岡沙紀", url: "https://youtu.be/9A4o5SpEMys&t=1038" },
  { name: "愛野 渚", url: "https://youtu.be/tDIEjvEMoXo&t=521" },
  { name: "西島 櫂", url: "https://youtu.be/tDIEjvEMoXo&t=1175" },
  { name: "北川真尋", url: "https://youtu.be/TfHGRmfm74M&t=419" },
  { name: "小松伊吹", url: "https://youtu.be/TfHGRmfm74M&t=1066" },
  { name: "月宮 雅", url: "https://youtu.be/xjUBi1iphNU&t=515" },
  { name: "松原早耶", url: "https://youtu.be/xjUBi1iphNU&t=1183" },
  { name: "兵藤レナ", url: "https://youtu.be/0jDWdskQ3sA&t=519" },
  { name: "間中美里", url: "https://youtu.be/0jDWdskQ3sA&t=1214" },
  { name: "衛藤美紗希", url: "https://youtu.be/4JTVty_SGfs&t=503" },
  { name: "岸部彩華", url: "https://youtu.be/4JTVty_SGfs&t=1117" },
  { name: "城ヶ崎美嘉", url: "https://youtu.be/AfaPlpugXoQ&t=403" },
  { name: "城ヶ崎莉嘉", url: "https://youtu.be/AfaPlpugXoQ&t=1032" },
  { name: "一ノ瀬志希", url: "https://youtu.be/2eQxc-blefU&t=505" },
  { name: "宮本フレデリカ", url: "https://youtu.be/2eQxc-blefU&t=1099" },
  { name: "大沼くるみ", url: "https://youtu.be/xSy5nDIzrtY&t=531" },
  { name: "大原みちる", url: "https://youtu.be/xSy5nDIzrtY&t=1227" },
  { name: "南条 光", url: "https://youtu.be/FE9MhY0cAQ8&t=736" },
  { name: "小関麗奈", url: "https://youtu.be/FE9MhY0cAQ8&t=1429" },
  { name: "池袋晶葉", url: "https://youtu.be/SVpGW5AFN5I&t=703" },
  { name: "三好紗南", url: "https://youtu.be/SVpGW5AFN5I&t=1351" },
  { name: "安斎 都", url: "https://youtu.be/Rf2epofZyTg&t=528" },
  { name: "古澤頼子", url: "https://youtu.be/Rf2epofZyTg&t=1156" },
  { name: "白坂小梅", url: "https://youtu.be/46j26G2j4q0&t=597" },
  { name: "松永 涼", url: "https://youtu.be/46j26G2j4q0&t=1325" },
  { name: "小早川紗枝", url: "https://youtu.be/pCxoG9axp3w&t=619" },
  { name: "塩見周子", url: "https://youtu.be/pCxoG9axp3w&t=1245" },
  { name: "鷺沢文香", url: "https://youtu.be/hNzxndWywRY&t=718" },
  { name: "橘 ありす", url: "https://youtu.be/hNzxndWywRY&t=1379" },
  { name: "櫻井桃華", url: "https://youtu.be/DMbUM7pDKXk&t=526" },
  { name: "佐々木千枝", url: "https://youtu.be/DMbUM7pDKXk&t=1438" },
  { name: "福山 舞", url: "https://youtu.be/zTJep3G0Ygo&t=487" },
  { name: "横山千佳", url: "https://youtu.be/zTJep3G0Ygo&t=1089" },
  { name: "古賀小春", url: "https://youtu.be/yh7dgZqpDx0&t=715" },
  { name: "メアリー・コクラン", url: "https://youtu.be/yh7dgZqpDx0&t=1355" },
  { name: "浜川愛結奈", url: "https://youtu.be/ObaFpV0uDZg&t=618" },
  { name: "松山久美子", url: "https://youtu.be/ObaFpV0uDZg&t=1285" },
  { name: "西川保奈美", url: "https://youtu.be/lTEWhBC1rCE&t=609" },
  { name: "服部瞳子", url: "https://youtu.be/lTEWhBC1rCE&t=1371" },
  { name: "冴島清美", url: "https://youtu.be/GtN-CkQXaK8&t=639" },
  { name: "涼宮星花", url: "https://youtu.be/GtN-CkQXaK8&t=1310" },
  { name: "岡崎泰葉", url: "https://youtu.be/43PGzhLrHVA&t=603" },
  { name: "松尾千鶴", url: "https://youtu.be/43PGzhLrHVA&t=1242" },
  { name: "氏家むつみ", url: "https://youtu.be/1vof79TOZFU&t=733" },
  { name: "成宮由愛", url: "https://youtu.be/1vof79TOZFU&t=1462" },
  { name: "沢田麻理菜", url: "https://youtu.be/RUKKYENrCek&t=507" },
  { name: "杉坂 海", url: "https://youtu.be/RUKKYENrCek&t=1064" },
  { name: "井村雪菜", url: "https://youtu.be/omqkbYaqZII&t=491" },
  { name: "藤居 朋", url: "https://youtu.be/omqkbYaqZII&t=1117" },
  { name: "相原雪乃", url: "https://youtu.be/j0qUyPTWyvs&t=725" },
  { name: "クラリス", url: "https://youtu.be/j0qUyPTWyvs&t=1369" },
  { name: "有浦柑奈", url: "https://youtu.be/vcbNOx8T9hU&t=484" },
  { name: "梅木音葉", url: "https://youtu.be/vcbNOx8T9hU&t=1115" },
  { name: "輿水幸子", url: "https://youtu.be/Qhm2HWZUTZo&t=484" },
  { name: "ヘレン", url: "https://youtu.be/Qhm2HWZUTZo&t=1354" },
  { name: "アナスタシア", url: "https://youtu.be/PAmJIvAjezg&t=574" },
  { name: "新田美波", url: "https://youtu.be/PAmJIvAjezg&t=1181" },
  { name: "五十嵐響子", url: "https://youtu.be/a0EPgALzUgA&t=584" },
  { name: "小日向美穂", url: "https://youtu.be/a0EPgALzUgA&t=1238" },
  
  
  // 以後公開されたら追加(即更新は無理です)
];
 
const SWITCH_SECONDS = 47;
 
// --- URLからYouTubeのvideoIDを抽出 ---
function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?&]+)/,
    /(?:youtube\.com\/embed\/)([^?&]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}
 
// --- URLからt=(開始秒数)を抽出 ---
// 対応形式: t=18 / t=18s / t=1m30s / t=1h2m3s / start=18
function extractStartSeconds(url) {
  let raw = null;
  const tMatch = url.match(/[?&]t=([^&]+)/);
  const startMatch = url.match(/[?&]start=([^&]+)/);
  if (tMatch) raw = tMatch[1];
  else if (startMatch) raw = startMatch[1];
  if (!raw) return 0;
 
  // 単純な秒数(数字のみ)の場合
  if (/^\d+$/.test(raw)) return parseInt(raw, 10);
 
  // 1h2m3s のような形式に対応
  const hms = raw.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);
  if (!hms) return 0;
  const h = parseInt(hms[1] || '0', 10);
  const m = parseInt(hms[2] || '0', 10);
  const s = parseInt(hms[3] || '0', 10);
  return h * 3600 + m * 60 + s;
}
 
// --- 配列をランダムにシャッフル(Fisher-Yates) ---
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
 
const playlist = shuffle(VIDEO_LIST);
let currentIndex = 0;
let switchTimer = null;
let player = null;
 
// --- 表を描画 ---
function renderTable() {
  const tbody = document.getElementById('list-body');
  tbody.innerHTML = '';
  playlist.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.id = 'row-' + idx;
    if (idx === currentIndex) tr.classList.add('current');
    const tdName = document.createElement('td');
    tdName.textContent = item.name;
    tdName.classList.add('clickable-name');
    tdName.addEventListener('click', function() {
      currentIndex = idx;
      loadVideo(currentIndex, true);
    });
    const tdUrl = document.createElement('td');
    tdUrl.textContent = item.url;
    tr.appendChild(tdName);
    tr.appendChild(tdUrl);
 
    const tdPost = document.createElement('td');
    const postBtn = document.createElement('button');
    postBtn.textContent = 'Xに投稿';
    postBtn.classList.add('post-btn');
    postBtn.addEventListener('click', function() {
      const text = encodeURIComponent(item.name.replace(/\s/g, ''));
      const url = encodeURIComponent(item.url);
      const intentUrl = `https://twitter.com/intent/tweet?text=${text}のシンデレラNo.1!%0A%23シンデレラNo1%0A%23${text}%0A&url=${url}`;
      window.open(intentUrl, '_blank');
    });
    tdPost.appendChild(postBtn);
    tr.appendChild(tdPost);
    tbody.appendChild(tr);
  });
}
 
function highlightCurrent() {
  document.querySelectorAll('#list-body tr').forEach(tr => tr.classList.remove('current'));
  const row = document.getElementById('row-' + currentIndex);
  if (row) row.classList.add('current');
}
 
// --- YouTube IFrame API ロード ---
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);
 
function onYouTubeIframeAPIReady() {
  const firstId = extractVideoId(playlist[0].url);
  const firstStart = extractStartSeconds(playlist[0].url);
  player = new YT.Player('player', {
    videoId: firstId,
    playerVars: {
      autoplay: 0,
      rel: 0,
      start: firstStart
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function getRandomNumber(min, max) {
  // min以上max以下の整数をランダムに返す
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onPlayerStateChange(event) {
  // 再生開始(state === 1)を検知したらタイマーをセット
  if (event.data === YT.PlayerState.PLAYING) {
    clearTimeout(switchTimer);
    num = getRandomNumber(45000,47000)
    switchTimer = setTimeout(playNext, num);
  }
}


 
function loadVideo(index, autoplay) {
  const videoId = extractVideoId(playlist[index].url);
  const startSeconds = extractStartSeconds(playlist[index].url);
  if (!videoId || !player) return;
  if (autoplay) {
    player.loadVideoById({ videoId: videoId, startSeconds: startSeconds });
  } else {
    player.cueVideoById({ videoId: videoId, startSeconds: startSeconds });
  }
  highlightCurrent();
}
 
function playNext() {
  currentIndex++;
  const autoplay = !document.getElementById('stopAutoplayCheckbox').checked;
  if (currentIndex >= playlist.length) {
    clearTimeout(switchTimer);
    const loop = document.getElementById('loopCheckbox').checked;
    if (loop) {
      currentIndex = 0;
      loadVideo(currentIndex, autoplay);
    }
    return; // リストの最後まで来たら停止
  }
  loadVideo(currentIndex, autoplay);
}
 
document.getElementById('playBtn').addEventListener('click', function() {
  currentIndex = 0;
  if (player && player.loadVideoById) {
    loadVideo(currentIndex, true);
  }
});
 
renderTable();