const accounts = {
"現金":{
category:"資産",
easy:true,
explanation:"会社が保有する財産なので資産!"
},

"当座預金":{
category:"資産",
easy:true,
explanation:"銀行に預けている会社の財産なので資産!"
},

"売掛金":{
category:"資産",
easy:true,
explanation:"将来代金を受け取る権利なので資産!"
},

"受取手形":{
category:"資産",
easy:false,
explanation:"将来代金を受け取る権利なので資産!"
},

"商品":{
category:"資産",
easy:true,
explanation:"販売するために保有している財産なので資産!"
},

"建物":{
category:"資産",
easy:true,
explanation:"会社が所有する財産なので資産!"
},

"備品":{
category:"資産",
easy:true,
explanation:"会社が所有する机やパソコンなどの財産なので資産!"
},

"土地":{
category:"資産",
easy:false,
explanation:"会社が所有する財産なので資産!"
},

"貸付金":{
category:"資産",
easy:true,
explanation:"将来返してもらう権利なので資産!"
},

"未収金":{
category:"資産",
easy:false,
explanation:"将来受け取る権利なので資産!"
},

"仮払金":{
category:"資産",
easy:false,
explanation:"一時的に立て替えたお金なので資産!"
},

"前払金":{
category:"資産",
easy:false,
explanation:"先に支払ったお金なので資産!"
},

"普通預金":{
category:"資産",
easy:false,
explanation:"銀行に預けている会社の財産なので資産!"
},

"車両運搬具":{
category:"資産",
easy:true,
explanation:"会社が所有する車などの財産なので資産!"
},

"定期預金":{
category:"資産",
easy:false,
explanation:"銀行に預けている会社の財産なので資産!"
},

"小口現金":{
category:"資産",
easy:false,
explanation:"少額の支払いに使う現金なので資産!"
},

"電子記録債権":{
category:"資産",
easy:false,
explanation:"将来受け取る権利なので資産!"
},

"仮払法人税等":{
category:"資産",
easy:false,
explanation:"仮に支払った税金なので資産!"
},

"仮払消費税":{
category:"資産",
easy:false,
explanation:"仮に支払った消費税なので資産!"
},

"繰越商品":{
category:"資産",
easy:false,
explanation:"期末に残っている商品なので資産!"
},

"買掛金":{
category:"負債",
easy:true,
explanation:"将来支払う義務なので負債!"
},

"支払手形":{
category:"負債",
easy:false,
explanation:"将来支払う義務なので負債!"
},

"借入金":{
category:"負債",
easy:true,
explanation:"返済義務があるので負債!"
},

"未払金":{
category:"負債",
easy:false,
explanation:"まだ支払っていないお金なので負債!"
},

"未払利息":{
category:"負債",
easy:false,
explanation:"まだ支払っていない利息なので負債!"
},

"前受金":{
category:"負債",
easy:false,
explanation:"先に受け取ったお金なので負債!"
},

"仮受金":{
category:"負債",
easy:false,
explanation:"一時的に預かっているお金なので負債!"
},

"未払消費税":{
category:"負債",
easy:false,
explanation:"まだ支払っていない消費税なので負債!"
},

"未払家賃":{
category:"負債",
easy:false,
explanation:"まだ支払っていない家賃なので負債!"
},

"電子記録債務":{
category:"負債",
easy:false,
explanation:"将来支払う義務なので負債!"
},

"当座借越":{
category:"負債",
easy:false,
explanation:"銀行から借りているお金なので負債!"
},

"資本金":{
category:"純資産",
easy:true,
explanation:"会社の元手なので純資産!"
},

"売上":{
category:"収益",
easy:false,
explanation:"会社の利益の原因となるので収益!"
},

"受取利息":{
category:"収益",
easy:true,
explanation:"利息を受け取って得た収益!"
},

"受取家賃":{
category:"収益",
easy:false,
explanation:"家賃を受け取って得た収益!"
},

"受取手数料":{
category:"収益",
easy:true,
explanation:"手数料を受け取って得た収益!"
},

"商品売買益":{
category:"収益",
easy:true,
explanation:"商品の売買による利益なので収益!"
},

"仕入":{
category:"費用",
easy:false,
explanation:"商品を仕入れるための費用!"
},

"給料":{
category:"費用",
easy:true,
explanation:"従業員へ支払う給料なので費用!"
},

"水道光熱費":{
category:"費用",
easy:false,
explanation:"水道・電気・ガス代なので費用!"
},

"通信費":{
category:"費用",
easy:true,
explanation:"電話やインターネット料金なので費用!"
},

"旅費交通費":{
category:"費用",
easy:true,
explanation:"交通費や出張費なので費用!"
},

"消耗品費":{
category:"費用",
easy:true,
explanation:"消耗品を使用した費用!"
},

"支払家賃":{
category:"費用",
easy:true,
explanation:"家賃を支払った費用!"
},

"発送費":{
category:"費用",
easy:false,
explanation:"商品の発送にかかる費用!"
},

"支払利息":{
category:"費用",
easy:true,
explanation:"利息を支払った費用!"
},

"広告宣伝費":{
category:"費用",
easy:true,
explanation:"広告にかかった費用!"
},

"修繕費":{
category:"費用",
easy:false,
explanation:"修理にかかった費用!"
},

"雑費":{
category:"費用",
easy:true,
explanation:"その他の少額な費用!"
},

"支払手数料":{
category:"費用",
easy:true,
explanation:"手数料を支払った費用!"
},

"貸倒損失":{
category:"費用",
easy:false,
explanation:"回収できなくなった損失!"
},

"現金過不足":{
category:"その他",
easy:false,
explanation:"現金の帳簿残高と実際の残高が一致しないときに、一時的に使う勘定科目"
},

"法人税等":{
category:"その他",
easy:false,
explanation:"会社が支払う法人税・住民税・事業税をまとめた勘定科目"
},

"未払法人税等":{
category:"負債",
easy:false,
explanation:"まだ支払っていない法人税等なので負債!"
},

}; 