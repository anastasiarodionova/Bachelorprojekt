import Dexie from 'dexie';
  
const App = () => {
    super('db');
    const db = new Dexie("webshop");
    db.version(1).stores({
        products:
          "++id, name, description, price",}); // Primary key and indexed props
    const [offSet, setOffSet] = useState(1);
    const [totalData, setTotalData] = useState([]);
    const [totalCount, setTotalCount] = useState(1);
    const setAllData = () => {
      axios
        .get(`https://dummyjson.com/products?limit=10&skip=10&select=title,price.json`)
        .then(async (res) => {
          await db.products.bulkAdd(res.data);
        });
      getTotalCount();
      getData(1);
    }; 
    const getTotalCount = async () => {
      let count = await db.products.count();
      setTotalCount(count);
    };
    const getData = async (product) => {
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