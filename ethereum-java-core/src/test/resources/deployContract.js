var bytecode = '6060604052341561000c57fe5b5b6108128061001c6000396000f300606060405236156100c3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fb3bcf2146100c557806343296bdd146100eb5780634a2c57c814610180578063770ca5d11461019257806377651a99146101d55780637bc76d2d146101fe57806395495680146102105780639b4869f7146102225780639b48d7fb14610234578063ba8cad38146102b4578063cbed653f146102de578063f0bab7ef146102f0578063f613a27a1461036f575bfe5b34156100cd57fe5b6100d56103a4565b6040518082815260200191505060405180910390f35b34156100f357fe5b6100fb6103ae565b60405180841515151581526020018360036000925b818410156101645782846020020151600260200280838360008314610154575b80518252602083111561015457602082019150602081019050602083039250610130565b5050509050019260010192610110565b9250505082151515158152602001935050505060405180910390f35b341561018857fe5b61019061044f565b005b341561019a57fe5b6101d360048080606001906003806020026040519081016040528092919082600360200280828437820191505050505091905050610452565b005b34156101dd57fe5b6101fc6004808035906020019091908035906020019091905050610456565b005b341561020657fe5b61020e61045b565b005b341561021857fe5b61022061049a565b005b341561022a57fe5b6102326105a2565b005b341561023c57fe5b6102446105fb565b6040518083151515158152602001806020018281038252838181518152602001915080519060200190602002808383600083146102a0575b8051825260208311156102a05760208201915060208101905060208303925061027c565b505050905001935050505060405180910390f35b34156102bc57fe5b6102c461060f565b604051808215151515815260200191505060405180910390f35b34156102e657fe5b6102ee610619565b005b34156102f857fe5b610300610654565b604051808260036000925b8184101561035f578284602002015160036020028083836000831461034f575b80518252602083111561034f5760208201915060208101905060208303925061032b565b505050905001926001019261030b565b9250505091505060405180910390f35b341561037757fe5b61037f61070e565b6040518083151515158152602001821515151581526020019250505060405180910390f35b6000600390505b90565b60006103b861071f565b60006001606060405190810160405280604060405190810160405280600060ff1660ff168152602001600160ff1660ff168152508152602001604060405190810160405280600260ff1660ff168152602001600160ff1660ff168152508152602001604060405190810160405280600060ff1660ff168152602001600160ff1660ff1681525081525060009250925092505b909192565b5b565b5b50565b5b5050565b7fb624b8b35d86a9486cc0aac46c4027c73e383690a155ff9adec74184012fec756001604051808215151515815260200191505060405180910390a15b565b7fcdf5d08b0aeb9fd3a6d59e3c045b6279bb9afc642e9036eed9dfbd297a328d3e60606040519081016040528060606040519081016040528060008152602001600181526020016002815250815260200160606040519081016040528060028152602001600181526020016001815250815260200160606040519081016040528060028152602001600081526020016001815250815250604051808260036000925b818410156105905782846020020151600360200280838360008314610580575b8051825260208311156105805760208201915060208101905060208303925061055c565b505050905001926001019261053c565b9250505091505060405180910390a15b565b7fef61f7a476ed410b51cb31f10884d6c0287802afec5cbd93adbc5b61cde5db1460016000600160405180841515151581526020018315151515815260200182151515158152602001935050505060405180910390a15b565b600061060561074d565b60006000fd5b9091565b6000600190505b90565b7fda0c3045bd39f801fee3be0f9a530b49a6e97c50c31dfaf2cba91ba92b28adeb60026040518082815260200191505060405180910390a15b565b61065c610761565b606060405190810160405280606060405190810160405280600060ff1660ff168152602001600160ff1660ff168152602001600260ff1660ff168152508152602001606060405190810160405280600260ff1660ff168152602001600160ff1660ff168152602001600160ff1660ff168152508152602001606060405190810160405280600260ff1660ff168152602001600060ff1660ff168152602001600160ff1660ff1681525081525090505b90565b6000600060016000915091505b9091565b60c0604051908101604052806003905b610737610790565b81526020019060019003908161072f5790505090565b602060405190810160405280600081525090565b610120604051908101604052806003905b61077a6107bb565b8152602001906001900390816107725790505090565b6040604051908101604052806002905b600060ff168152602001906001900390816107a05790505090565b6060604051908101604052806003905b600060ff168152602001906001900390816107cb57905050905600a165627a7a72305820aa541b253706280b55a6e8900ae9802bd72aa2a5f9c39ac65c7106486cd5dfe40029'
var abi = [{"constant":false,"inputs":[],"name":"testFunctionOutputsPrimitive","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"testFunctionOutputs3Matrix","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint8[2][3]"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"testFunctionOutputsVoid","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint8[3]"}],"name":"testFunctionInputsArray","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"},{"name":"y","type":"uint256"}],"name":"testFunctionInputsPrimitives","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"throwEventReturnsBool","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"throwEventReturnsMatrix","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"throwEventReturnsMultiple","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"testFunctionThrowsException","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint8[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"testFunctionOutputsBool","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"throwEventReturnsUInt","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"testFunctionOutputsMatrix","outputs":[{"name":"","type":"uint8[3][3]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"testFunctionOutputs2","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"testEventReturnsUInt","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bool"}],"name":"testEventReturnsBool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"int256[3][3]"}],"name":"testEventReturnsMatrix","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bool"},{"indexed":false,"name":"","type":"bool"},{"indexed":false,"name":"","type":"bool"}],"name":"testEventReturnsMultiple","type":"event"}]
var identifier = "Test Contract" ;
var testcontract = web3.eth.contract(abi).new(
   identifier,
   {
     from: web3.eth.accounts[0],
     data: '0x'+bytecode,
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
        console.log('CONTRACT{' + contract.address + '}');
        miner.stop();
    }
 })

miner.start();



