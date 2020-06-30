const U = require("./utils")
const pathFn = require("path")
const fs = require("fs")


const Ulti_path = pathFn.join(__project,'UltiSnips')
const snip_reg = /snippet (\w+) "([\s\S]+?)" ([bi])/g
const snip_reg_line = /snippet (\w+) "([\s\S]+?)" ([bi])/


let rets = []
let readme =[ '|算法|触发|位置|', '|----|----|----|' ]
U.maps_2_deal( Ulti_path,[],(snip)=>{
    if( snip.extname !== '.snippets') return;
    let r = U.read(snip.full_path)
    var matchs = r.match(snip_reg)
    if( !matchs) return;
    for( let line of matchs){
      var b = line.match(snip_reg_line)
      //rets.push({
        //input:b.input,
        //name:b[1],
        //desc:b[2],
        //mode:b[3],
        //path: snip.rpath+'/'+snip.basename
      //})
      
      readme.push(`|${b[2]}|${b[1]}|${pathFn.join(snip.rpath,snip.basename)}|`)
    }
  }
)

console.log(readme.join('\n'))

