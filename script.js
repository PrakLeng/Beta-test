// var show = ``
// fetch('https://prakleng.github.io/API-BOOK/data.json')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(val => {
//             show += `
//             <div class="col">
//                 <div class="card h-100 shadow-sm border-0" type="button" 
//                     onclick="location.href='bookpage.html?id=${val.id}'">
//                     <img src="${val.cover}" class="card-img-top p-3" alt="${val.title}">
//                     <div class="card-body text-center">
//                         <h6 class="card-title mb-1 text-dark fw-bold">${val.title}</h6>
//                         <p class="card-text small text-muted">${val.author}</p>
//                     </div>
//                 </div>
//             </div>`
//         });
//         document.getElementById('front-home').innerHTML = show;
//     })
//     .catch(error => console.error('Error fetching data:', error));

var show = ``;
fetch('https://prakleng.github.io/API-BOOK/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(val => {
            show += `
            <div class="col">
                <div class="card h-100 shadow-sm border-0 book-card" type="button" 
                    onclick="location.href='bookpage.html?id=${val.id}'"
                    style="transition: transform 0.2s; cursor: pointer;">
                    
                    <img src="${val.cover || 'https://via.placeholder.com/150x200?text=No+Cover'}" 
                         class="card-img-top p-3" 
                         alt="${val.title}" 
                         style="height: 250px; object-fit: contain;">

                    <div class="card-body text-center">
                        <h6 class="card-title mb-1 text-dark fw-bold">${val.title}</h6>
                        <p class="card-text small text-muted">${val.author}</p>
                        <span class="badge bg-light text-secondary border small">${val.category}</span>
                    </div>
                </div>
            </div>`;
        });
        document.getElementById('front-home').innerHTML = show;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('front-home').innerHTML = `<p class="text-center">Failed to load books.</p>`;
    });
