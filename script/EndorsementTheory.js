
var possibleNOP = [];
    for (let index = 0; index < 100; index++) {
        possibleNOP.push(index);
    }


var InputQueries = [];
var QueryWordBook = {
    'create': ['create', 'make', 'build', 'construct'],
    'tell': ['say', 'express', 'present', 'show'],

    'number': possibleNOP,

    'possibilities': ['possibilities', 'worlds']
};

class EndorsementTheory {
    constractor(EpistemicState) {
            this.ES = 'The name of the EpistemicState is '+ EpistemicState;  
    }
    static ES() {return this.ES};
}

class SetOfPossibilities {
    constructor(id,NumberOfPossibilities) {
        this.ID = id;
        this.NONumberOfPossibilities = NumberOfPossibilities;
        this.set = new Set;
        for (let index = 0; index < NumberOfPossibilities; index++) {
            this.set.add('W'+(index+1))            
         }
    }
    static DEF() {
        this.Def = 'The set of possibilities is the set of all possible worlds';
        return this.Def;
    }
}

class PerceivedQuery {
    constructor(id,InputQuery) {
        this.id = id;
        this.info = 'I show what I perceived based on the input';
        this.Raw = InputQuery;
        this.RawArray = this.Raw.split(' ');
        this.QueryArray = this.grasp_query(InputQuery);
    }
    grasp_query(InputQuery) {
        //let InputQueryArray = new Set;
        let KeyInp = {};
        for (const key in QueryWordBook) {
            if (QueryWordBook.hasOwnProperty(key)) {
                for (let index = 0; index < QueryWordBook[key].length; index++) {
                    for (let indexIn = 0; indexIn < this.RawArray.length; indexIn++) {
                        if (this.RawArray[indexIn]==QueryWordBook[key][index]) {
                            KeyInp[key]=QueryWordBook[key][index];
                        }
                    }
                }   
            }
        }
        return KeyInp;
    }
}


var prob_query =  function() {
    var InputQuery = document.getElementById('input-query').value;
    InputQueries.push(InputQuery);
    let PerceivedQueryq = new PerceivedQuery("newPerceivedQuery",InputQuery.toLowerCase());
    console.log('PerceivedQuery',PerceivedQueryq.grasp_query())

}



var switch_query = function(InputQuery) {
    switch (InputQuery) {
        case 'My Life and Love':
            console.log('DanaAnahita');
            break;
        case 'theirName':
            console.log('Others');
            break;   
        default:
            break;
    }
}


