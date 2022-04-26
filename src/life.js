const sliderBox = document.querySelector(".expriences__slider");
const leftBtn = document.querySelector(".left-slide-btn");
const rightBtn = document.querySelector(".right-slide-btn");

const experiences = [
	{
		id: "ex-educaiton",
		title: "Ajou Univ.",
		content: "Major Eng & Intl Comm.",
		description:
			"경기도 수원시 소재인 아주대학교를 졸업했습니다. 영어영문학과 국제통상학을 전공하여 프로그래밍 비전공자인만큼 동기분들을 따라 열심히 달려보겠습니다. <br/><br/><br/> 방탈출하다 미쳐버린 대학생",
		src: "img/photo_ex_univ.jpg",
	},
	{
		id: "ex-essential",
		title: "Sports, Coffee,<br/> Friends, Trips",
		content: "Best friends of my life",
		description:
			"같은 동네에 10년 이상을 살다보니 같이 무리를 이루는 소중한 동네 친구들이 정말 많습니다. 축구, 운동, 커피마시기 (술도 ㅎ), 여행다니는 것도 저에게는 친구만큼 소중합니다. <br><br> 저 때 사실 별말 안하고 있었습니다",
		src: "img/photo_ex_es.jpg",
	},
	{
		id: "ex-special",
		title: "An officer in Army",
		content: "For 28 months, service as a officer",
		description:
			"강원도 고성군에 위치한 22사단 55보병여단 예하부대에서 소대장과 부중대장 직책으로 약 2년간 임무 수행했습니다. 일반 현역장병과는 조금 다른 방식으로 다양한 경험을 하고 생각을 할 수 있는 시간이었습니다. <br><br> Appreciate for service and duty",
		src: "img/photo_ex_sp.jpg",
	},
	{
		id: "ex-future",
		title: "From Now On",
		content: "Work togerther! Good People!",
		description:
			"인생을 살아가면서 내가 어떤 사람이 되는지 고민하는 시간은 정말 중요한 것 같습니다. 죽고 사는 문제보다 중요한 것은 없다고 생각합니다. 나에게도, 다른사람에게 좋은 사람이 되려고 노력하는 하루하루를 살아가려고 합니다. <br/> This too shall pass away",
		src: "img/photo_ex_ft.jpg",
	},
];

function createItems(item) {
	return `<li class="experience__item">
    <div class="image-box">
      <img src="${item.src}">
    </div>
    <div class="paragraph">
      <h2> ${item.title} </h2>
      <p class="ex--content"> ${item.content} </p>
      <p class="ex--desc"> ${item.description} </p>
    </div>
  </li>`;
}
function life() {
	sliderBox.innerHTML = experiences.map((ex) => createItems(ex)).join("");
}
life();

const slideItem = document.querySelectorAll(".experience__item");
const slideCount = slideItem.length;

let currentIdx = 0;
function moveItems(num) {
	sliderBox.style.left = -num * 600 + "px";
	currentIdx = num;
}

leftBtn.onclick = () => {
	if (currentIdx <= slideCount - 1 && currentIdx > 0) {
		moveItems(currentIdx - 1);
	}
};

rightBtn.onclick = () => {
	if (currentIdx < slideCount - 1) {
		moveItems(currentIdx + 1);
	}
};
