/**
 * Created by thj on 16/4/21.
 */
var fs = require("fs");
var data = fs.readFileSync('./mycode.code');
var mycode = data.toString();
mycode = mycode.replace(/[^\w\d\*\+\/\-\^,;\(\)\n=]/g, " ");
var keyword = "var";
var vars = {};
var splitsignal = "+-*/^ =;,()"; //界符
var midfixexpressionArray = []; //待转换的中缀表达式
//词法分析兼语义分析器
var lexparse = function (code) {
    var codetoword = function (code, line) {
        var position = 0, char, wordArray = [], word = "", isVarSentence = false;//isVarSentence是表示该句子是否为声明语句的标志
        while (char = code.charAt(position)) {
            if (splitsignal.indexOf(char) != -1) {
                if (word != "") {
                    if (word === keyword) {  //判断所读的word是否为关键字
                        isVarSentence = true;
                    } else if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(word)) {
                        if (isVarSentence) {
                            if (!vars[word]) {
                                vars[word] = true;
                            } else {
                                console.log("line" + line + ": 变量" + word + "重复定义");
                            }
                        } else {
                            if (!vars[word]) {
                                console.log("line" + line + ": 变量" + word + "未定义")
                            }
                        }
                    }
                    wordArray.push(word);
                }
                word = "";
                if (char != ' ') {
                    wordArray.push(char);
                }
            } else {
                word += char;
            }
            position++;
        }
        // console.log(wordArray);
        return wordArray;
    };
    code = code.trim();
    var sentences = code.split('\n');
    sentences.map(function (currentValue, index, arr) {
        arr[index] = currentValue.trim();
    });
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() != "") {
            var returnValue = codetoword(sentences[i].trim(), i + 1);
            midfixexpressionArray.push(returnValue);
        }
    }
};
//语法分析器
var parse = function (midfixexpression, line) {
    //错误分析
    var errorparse = function (stack,a) {
        var errormassage = "";
      if(stack.pop()===")"){
          errormassage = "缺少右括号";
      }else if(a===")"){
          errormassage = "缺少号";
      }else if(a==="#" && stack.length >1){
          errormassage = "缺少分号";
      }
        return errormassage;
    };
    // 判断是否为终结符
    var isVT = function (x) {
        var vt = ["+", "-", "*", "/", "^", ",", "Var", ";", "Id", "=", "(", ")", "num"], result = false;
        vt.map(function (currentValue) {
            if (currentValue === x) {
                result = true;
            }
        });
        return result;
    };
    //定义一个预测分析表
    var table = {
        "C": {
            "Var": ["D", "A", "C"],
            "Id": ["A", "C"],
            "#": []
        },
        "D": {
            "Var": ["Var", "I", ";"],
            "Id": [],
            "#": []
        },
        "A": {
            "Id": ["Id", "=", "E", ";"],
            "#": []
        },
        "I": {
            "Id": ["Id", "I'"]
        },
        "I'": {
            ";": [],
            ",": [",", "I"]
        },
        "E": {
            "Id": ["Id", "E'"],
            "(": ["(", "E", ")", "E'"],
            "num": ["num", "E'"]
        },
        "E'": {
            "+": ["+", "E", "E'"],
            "-": ["-", "E", "E'"],
            "*": ["*", "E", "E'"],
            "/": ["/", "E", "E'"],
            "^": ["^", "E", "E'"],
            "#": [],
            ";": [],
            ")": []
        }
    };
    var stack = ["#", "C"];
    midfixexpression.push("#");
    for (var i = 0; i < midfixexpression.length; i++) {
        // a为当前输入符号,x为stack栈顶符号

        var a = midfixexpression[i], x;
        var updateX = function () {
            x = stack[stack.length - 1];
        };
        updateX();
        while (1) {
            if (isVT(x)) {
                if (x === a) {
                    stack.pop();
                    updateX();
                    break;
                } else {
                    console.log("line" + line + ": 语句存在错误: "+errorparse(stack,a));
                    return false;
                }
            } else {
                if (x === a && a === "#") {
                    // console.log("line" + line + ": 语句分析成功");
                    return true;
                } else {
                    var statement = table[x][a];
                    if (statement) {
                        stack.pop();
                        updateX();
                        for (var j = statement.length - 1; j >= 0; j--) {
                            stack.push(statement[j]);
                        }
                        updateX();
                    } else {
                        console.log("line" + line + ": 语句存在错误: "+errorparse(stack,a));
                        return false;
                    }
                }
            }
        }
    }
};
//中缀转后缀转换器
var transition = function(midfixexpression){
    if(midfixexpression[0] == "var"){
        return "";
    }else{
        midfixexpression.pop();
    }
    var message = "",stack = [];
    var judge = function(op){
        switch (op){
            case "=":
                return 0;
            case "+":
            case "-":
                return 1;
            case "*":
            case "/":
                return 2;
            case "^":
                return 3;
            case "(":
            case ")":
                return 4;
        }
    };
    for(var i = 0; i<midfixexpression.length; i++){="" var="" a="midfixexpression[i];" if(="" [\*\+\="" \-\^\(\)="]/.test(a)){" pop="stack.pop();" if(pop="=undefined){" stack.push(a);="" }else="" if(judge(pop)="">=judge(a) && pop != "(" && a != ")"){
                stack.push(a);
                message += " "+pop;
            }else if(a == ")" ){
                while(pop != "("){
                    message += " "+pop;
                    pop = stack.pop();
                }
            } else if(judge(pop)</midfixexpression.length;>