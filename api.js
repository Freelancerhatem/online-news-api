const newData = async () => {
    const linkJson = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await linkJson.json();
    secondData(data.data.news_category)
}

const secondData = (getData) => {
    // console.log(getData)
    let count =0;
    const newsContainer = document.getElementById('tabBtn');
    getData.forEach(title => {
        count++;
        const element =document.createElement('div');
        element.innerHTML=`
        <a class="tab tab-lg tab-lifted mr-6" onclick="handleLoadNews('${title.category_id}')">${count}.${title.category_name} </a> 
        `
        newsContainer.appendChild(element);
        
    });

}
const handleLoadNews =async(id)=>{
    
    const newsIdjson = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
        const data =await newsIdjson.json();
        console.log(data)
        const newsDataContainer = document.getElementById('newsContainer');
        // clear previous data
        newsDataContainer.textContent ='';
        data.data.forEach(news=>{
            console.log(news)
        const NewContainer=document.createElement('div');
        NewContainer.classList ='w-80 bg-slate-500 my-5'
        NewContainer.innerHTML = `
        <figure><img src='${news.image_url} '/></figure>
            <div class="card-body ">
              <h2 class="card-title" id="news-title">
               ${news.title.slice(0,30)}...
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div> 
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
        `
        newsDataContainer.appendChild(NewContainer);
        })
    
}
newData()