import Dexie from 'dexie';
 
//Wrapper-Bibliothek für indexedDB - die Standard-Datenbank im Browser
const App = () => {
    super('db');
    const db = new Dexie("webshop");
    db.version(1).stores({
        products:
          "++id, name, description, price",}); // Primary key and indexed props
    const [offSet, setOffSet] = useState(1);
    const [totalData, setTotalData] = useState([]);
    const [totalCount, setTotalCount] = useState(1);
    const setAllData = () => { //alle Daten von der API abgerufen und in der IndexDb gespeichert
      axios
        .get(`https://dummyjson.com/products?limit=10&skip=10&select=title,price.json`)
        .then(async (res) => {
          await db.products.bulkAdd(res.data);
        });
      getTotalCount();
      getData(1);
    }; 
    const getTotalCount = async () => { //die Gesamtzahl der Daten in der Datenbank
      let count = await db.products.count();
      setTotalCount(count);
    };
    const getData = async (product) => { //paginierten Daten aus der IndexDB
      setOffSet(product);
      const productData = await db.products
        .offset(product)
        .toArray();
      setTotalData(productData);
    };
  
    const pageChanged=(page)=>{
      getData(page)
    }
  
    useEffect(() => {
      setAllData();
    }, []);

    //Asynchrone Datenverarbeitung
    function main() {
        const loadDbButton = document.querySelector("#load");
        const queryDbButton = document.querySelector("#query");
        const clearDbButton = document.querySelector("#clear"); 
        const logPanel = document.querySelector(".logs"); 
        const resultPanel = document.querySelector(".main"); 
      
        const DBNAME = "customer_db";
      
        loadDbButton.addEventListener("click", () => {
          loadDB(DBNAME, logPanel);
        });
      
        queryDbButton.addEventListener("click", async () => {
          const result = await queryDB(DBNAME, logPanel);
          displayResult(result, resultPanel);
        });
      
        clearDbButton.addEventListener("click", async () => {
          await clearDB(DBNAME, logPanel);
          displayResult(null, resultPanel);
        });
      }
      
      (async () => {
        await main();
      })();

}