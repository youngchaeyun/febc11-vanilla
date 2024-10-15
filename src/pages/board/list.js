import axios from 'axios';

// API 서버에서 게시물 목록 조회
async function getList(){
    const res = await axios.get('https://11.fesp.shop/posts', {
        params: {type: 'test', page: 1, limit: 5}
    });
    console.log(res);
    return res.data;
}


// 조회한 게시물 목록으로 화면에 출력
async function renderList(){
    const list = await getList();
    const liList = list.item.map((post) => {
        return `
            <li>
                <h2>${post._id} ${post.title}</h2>
                <span>조회수: ${post.views} 날짜:${post.createdAt}</span>
                <p>${post.content}</p>
            </li>`;
    });
    document.querySelector('#postList').innerHTML = liList.join('');
}

renderList();