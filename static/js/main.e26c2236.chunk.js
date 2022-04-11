(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{33:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/wavePortal.sol","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5061094c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b919061052d565b61009e565b005b61006a6101d6565b604051610077919061058f565b60405180910390f35b6100886101df565b6040516100959190610794565b60405180910390f35b60016000808282546100b091906107e5565b92505081905550600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610176929190610330565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516101cb929190610885565b60405180910390a250565b60008054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561032757838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461028c906108e4565b80601f01602080910402602001604051908101604052809291908181526020018280546102b8906108e4565b80156103055780601f106102da57610100808354040283529160200191610305565b820191906000526020600020905b8154815290600101906020018083116102e857829003601f168201915b5050505050815260200160028201548152505081526020019060010190610203565b50505050905090565b82805461033c906108e4565b90600052602060002090601f01602090048101928261035e57600085556103a5565b82601f1061037757805160ff19168380011785556103a5565b828001600101855582156103a5579182015b828111156103a4578251825591602001919060010190610389565b5b5090506103b291906103b6565b5090565b5b808211156103cf5760008160009055506001016103b7565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61043a826103f1565b810181811067ffffffffffffffff8211171561045957610458610402565b5b80604052505050565b600061046c6103d3565b90506104788282610431565b919050565b600067ffffffffffffffff82111561049857610497610402565b5b6104a1826103f1565b9050602081019050919050565b82818337600083830152505050565b60006104d06104cb8461047d565b610462565b9050828152602081018484840111156104ec576104eb6103ec565b5b6104f78482856104ae565b509392505050565b600082601f830112610514576105136103e7565b5b81356105248482602086016104bd565b91505092915050565b600060208284031215610543576105426103dd565b5b600082013567ffffffffffffffff811115610561576105606103e2565b5b61056d848285016104ff565b91505092915050565b6000819050919050565b61058981610576565b82525050565b60006020820190506105a46000830184610580565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610601826105d6565b9050919050565b610611816105f6565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610651578082015181840152602081019050610636565b83811115610660576000848401525b50505050565b600061067182610617565b61067b8185610622565b935061068b818560208601610633565b610694816103f1565b840191505092915050565b6106a881610576565b82525050565b60006060830160008301516106c66000860182610608565b50602083015184820360208601526106de8282610666565b91505060408301516106f3604086018261069f565b508091505092915050565b600061070a83836106ae565b905092915050565b6000602082019050919050565b600061072a826105aa565b61073481856105b5565b935083602082028501610746856105c6565b8060005b85811015610782578484038952815161076385826106fe565b945061076e83610712565b925060208a0199505060018101905061074a565b50829750879550505050505092915050565b600060208201905081810360008301526107ae818461071f565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107f082610576565b91506107fb83610576565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156108305761082f6107b6565b5b828201905092915050565b600082825260208201905092915050565b600061085782610617565b610861818561083b565b9350610871818560208601610633565b61087a816103f1565b840191505092915050565b600060408201905061089a6000830185610580565b81810360208301526108ac818461084c565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806108fc57607f821691505b602082108114156109105761090f6108b5565b5b5091905056fea26469706673582212205b1450282d0f6fbb123fd65efeed4fc057c7b2b58ba52785859c0133b5588b6164736f6c634300080a0033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b919061052d565b61009e565b005b61006a6101d6565b604051610077919061058f565b60405180910390f35b6100886101df565b6040516100959190610794565b60405180910390f35b60016000808282546100b091906107e5565b92505081905550600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610176929190610330565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516101cb929190610885565b60405180910390a250565b60008054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561032757838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461028c906108e4565b80601f01602080910402602001604051908101604052809291908181526020018280546102b8906108e4565b80156103055780601f106102da57610100808354040283529160200191610305565b820191906000526020600020905b8154815290600101906020018083116102e857829003601f168201915b5050505050815260200160028201548152505081526020019060010190610203565b50505050905090565b82805461033c906108e4565b90600052602060002090601f01602090048101928261035e57600085556103a5565b82601f1061037757805160ff19168380011785556103a5565b828001600101855582156103a5579182015b828111156103a4578251825591602001919060010190610389565b5b5090506103b291906103b6565b5090565b5b808211156103cf5760008160009055506001016103b7565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61043a826103f1565b810181811067ffffffffffffffff8211171561045957610458610402565b5b80604052505050565b600061046c6103d3565b90506104788282610431565b919050565b600067ffffffffffffffff82111561049857610497610402565b5b6104a1826103f1565b9050602081019050919050565b82818337600083830152505050565b60006104d06104cb8461047d565b610462565b9050828152602081018484840111156104ec576104eb6103ec565b5b6104f78482856104ae565b509392505050565b600082601f830112610514576105136103e7565b5b81356105248482602086016104bd565b91505092915050565b600060208284031215610543576105426103dd565b5b600082013567ffffffffffffffff811115610561576105606103e2565b5b61056d848285016104ff565b91505092915050565b6000819050919050565b61058981610576565b82525050565b60006020820190506105a46000830184610580565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610601826105d6565b9050919050565b610611816105f6565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610651578082015181840152602081019050610636565b83811115610660576000848401525b50505050565b600061067182610617565b61067b8185610622565b935061068b818560208601610633565b610694816103f1565b840191505092915050565b6106a881610576565b82525050565b60006060830160008301516106c66000860182610608565b50602083015184820360208601526106de8282610666565b91505060408301516106f3604086018261069f565b508091505092915050565b600061070a83836106ae565b905092915050565b6000602082019050919050565b600061072a826105aa565b61073481856105b5565b935083602082028501610746856105c6565b8060005b85811015610782578484038952815161076385826106fe565b945061076e83610712565b925060208a0199505060018101905061074a565b50829750879550505050505092915050565b600060208201905081810360008301526107ae818461071f565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107f082610576565b91506107fb83610576565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156108305761082f6107b6565b5b828201905092915050565b600082825260208201905092915050565b600061085782610617565b610861818561083b565b9350610871818560208601610633565b61087a816103f1565b840191505092915050565b600060408201905061089a6000830185610580565b81810360208301526108ac818461084c565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806108fc57607f821691505b602082108114156109105761090f6108b5565b5b5091905056fea26469706673582212205b1450282d0f6fbb123fd65efeed4fc057c7b2b58ba52785859c0133b5588b6164736f6c634300080a0033","linkReferences":{},"deployedLinkReferences":{}}')},39:function(f,e,b){f.exports=b(58)},44:function(f,e,b){},46:function(f,e,b){},48:function(f,e){},58:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),n=b(32),r=b.n(n),c=(b(44),b(19)),s=b(2),o=b.n(s),i=b(20),u=b(23),d=b(12),l=(b(46),b(33));function m(){var f="0x70f2C0dd12E5938940F7c6BF1787e100990EC288",e=l.abi,b=Object(a.useState)(""),n=Object(u.a)(b,2),r=n[0],s=n[1],m=Object(a.useState)(""),p=Object(u.a)(m,2),v=p[0],g=p[1],h=Object(a.useState)([]),w=Object(u.a)(h,2),y=w[0],x=w[1],E=function(){var f=Object(i.a)(o.a.mark((function f(){var e,b,a,t;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=6;break}console.log("Make sure you have metamask!"),f.next=10;break;case 6:return f.next=8,b.request({method:"eth_accounts"});case 8:0!==(a=f.sent).length?(t=a[0],console.log("Found an authorized account:",t),s(t),W()):console.log("No authorized account found");case 10:f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),k=function(){var f=Object(i.a)(o.a.mark((function f(){var e,b,a;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:a=f.sent,console.log("Connected",a[0]),s(a[0]),W(),f.next=16;break;case 13:f.prev=13,f.t0=f.catch(0),console.log(f.t0);case 16:case"end":return f.stop()}}),f,null,[[0,13]])})));return function(){return f.apply(this,arguments)}}(),N=function(){var b=Object(i.a)(o.a.mark((function b(){var a,t,n,r,c,s;return o.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if(b.prev=0,a=window,!(t=a.ethereum)){b.next=15;break}return n=new d.a.providers.Web3Provider(t),r=n.getSigner(),c=new d.a.Contract(f,e,r),b.next=8,c.wave(v,{gasLimit:3e5});case 8:return s=b.sent,console.log("Mining...",s.hash),b.next=12,s.wait();case 12:console.log("Mined -- ",s.hash),b.next=16;break;case 15:console.log("Ethereum object doesn't exist!");case 16:b.next=21;break;case 18:b.prev=18,b.t0=b.catch(0),console.log(b.t0);case 21:case"end":return b.stop()}}),b,null,[[0,18]])})));return function(){return b.apply(this,arguments)}}(),W=function(){var b=Object(i.a)(o.a.mark((function b(){var a,t,n,r,c,s,i;return o.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if(a=window,t=a.ethereum,b.prev=1,!t){b.next=13;break}return n=new d.a.providers.Web3Provider(t),r=n.getSigner(),c=new d.a.Contract(f,e,r),b.next=8,c.getAllWaves();case 8:s=b.sent,i=s.map((function(f){return{address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message}})),x(i),b.next=14;break;case 13:console.log("Ethereum object doesn't exist!");case 14:b.next=19;break;case 16:b.prev=16,b.t0=b.catch(1),console.log(b.t0);case 19:case"end":return b.stop()}}),b,null,[[1,16]])})));return function(){return b.apply(this,arguments)}}();return Object(a.useEffect)((function(){var b;E();var a=function(f,e,b){console.log("NewWave",f,e,b),x((function(a){return[].concat(Object(c.a)(a),[{address:f,timestamp:new Date(1e3*e),message:b}])}))};if(window.ethereum){var t=new d.a.providers.Web3Provider(window.ethereum).getSigner();(b=new d.a.Contract(f,e,t)).on("NewWave",a)}return function(){b&&b.off("NewWave",a)}}),[]),t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),t.a.createElement("div",{className:"bio"},"I am AJERMOUNE and I'm passionate about the Defi, Blockchain, Decentralization so that's pretty cool right? Connect your Ethereum wallet and wave at me!"),t.a.createElement("br",null),t.a.createElement("br",null),r&&t.a.createElement(t.a.Fragment,null,t.a.createElement("textarea",{value:v,placeholder:"Enter you're message :)",onChange:function(f){return g(f.target.value)},className:"message"}),t.a.createElement("button",{className:"waveButton",onClick:N},"Wave at Me")),!r&&t.a.createElement("button",{className:"waveButton",onClick:k},"Connect Wallet"),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement("br",null),0!==y.length&&t.a.createElement(t.a.Fragment,null,t.a.createElement("h1",null,"Waves Log :"),y.map((function(f,e){return t.a.createElement("div",{key:e,style:{backgroundColor:"#f8f8f8",marginTop:"16px",padding:"8px"}},t.a.createElement("div",null,"Address: ",f.address),t.a.createElement("div",null,"Time: ",f.timestamp.toString()),t.a.createElement("div",null,"Message: ",f.message))})))))}r.a.render(t.a.createElement(m,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e26c2236.chunk.js.map