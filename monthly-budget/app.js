var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1
        }
    };
    Expense.prototype.getPercentage = function() {
        return this.percentage
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotals = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    return {
        addItem: function(typ, des, val) {

            var newItem, newID;

            if (data.allItems[typ].length > 0) {
                var lastIndex = data.allItems[typ].length - 1;
                newID = data.allItems[typ][lastIndex].id + 1;
            } else {
                newID = 0;
            };

            if (typ === 'exp') {
                newItem = new Expense(newID, des, val);
            }
            else if (typ === 'inc') {
                newItem = new Income(newID, des, val);
            }

            data.allItems[typ].push(newItem);
            
            return newItem;
        },
        deleteItem: function(type, id) {
            var IDs = data.allItems[type].map(function(current) {
                return current.id;
            });
            var index = IDs.indexOf(id);
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function() {
            calculateTotals('exp');
            calculateTotals('inc');
            data.budget = data.totals.inc - data.totals.exp;
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {data.percentage = -1};
        },
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
            return cur.getPercentage();
            });
            return allPerc;
        },
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function() {console.log(data);}
    };
})();

var UIcontroller = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
    var formatNumber = function(num, type) {
        var numSplit, int, dec, type;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');
        int = numSplit[0];
        dec = numSplit[1];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };
    return {
        getDOMstrings: function() {
            return DOMstrings;
        },
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        addListItem: function(obj, typ) {
            var html, newHtml, element;
            if (typ === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-circle-outline"></i></button></div></div></div>';
            }
            else if (typ === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-circle-outline"></i></button></div></div></div>';
            };
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, typ));
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function(id) {
            var el = document.getElementById(id);
            el.parentNode.removeChild(el);
        },
        clearFields: function(){
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            var fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {current.value = '';});
            fieldsArr[0].focus();
        },
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {document.querySelector(DOMstrings.percentageLabel).textContent = '-';};
        },
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            for (var i=0; i<fields.length; i++) {
                if (percentages[i] > 0) {
                    fields[i].textContent = percentages[i] + '%';
                } else {
                    fields[i].textContent = '-';
                }
            }
        },
        displayMonth: function() {
            var now, month, year, monthNames;
            now = new Date();
            monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            monthNumber = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = monthNames[monthNumber] + ' ' + year;
        },
        changedType: function() {
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ', ' +
                DOMstrings.inputDescription + ', ' +
                DOMstrings.inputValue
            );
            for (var i=0; i<fields.length; i++) {
                fields[i].classList.toggle('red-focus');
            }
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        }
    };
})();

var controller = (function(budgetCtrl, UIctrl) {

    var setupEventListeners = function() {

        var DOM = UIctrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            };
        });        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UIctrl.changedType);
    };
    
    var updateBudget = function() {
        budgetCtrl.calculateBudget();
        var budget = budgetCtrl.getBudget();
        UIctrl.displayBudget(budget);
    };
    var updatePercentages = function() {
        budgetCtrl.calculatePercentages();
        var percentages = budgetCtrl.getPercentages();
        UIctrl.displayPercentages(percentages);
    };
    var ctrlAddItem = function() {
        var input = UIctrl.getInput();
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            UIctrl.addListItem(newItem, input.type);
            UIctrl.clearFields();
            updateBudget();
            updatePercentages();
        };
    };
    var ctrlDeleteItem = function(event) {
        var itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            var splitID = itemID.split('-');
        }
        var type = splitID[0];
        var ID = parseInt(splitID[1]);

        budgetCtrl.deleteItem(type, ID);
        UIctrl.deleteListItem(itemID);

        updateBudget();
        updatePercentages();
    };
    return {
        init: function() {
            UIctrl.displayMonth();
            UIctrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };
})(budgetController, UIcontroller);
controller.init();