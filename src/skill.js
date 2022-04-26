const skillWrapper = document.querySelector(".skills_wrapper");

const skills = [
	{
		title: "html & css",
		level: "80%",
	},
	{
		title: "JS (Javascript)",
		level: "50%",
	},
	{
		title: "React.Js",
		level: "30%",
	},
	{
		title: "BE (NodeJs, Django)",
		level: "10%",
	},
	{
		title: "English",
		level: "85%",
	},
	{
		title: "Activity",
		level: "85%",
	},
];

export default function createSkillBar(item) {
	return `<div class="skill__item">
	<div class="skill-title-wrapper">
		<h2 class="skill--title"> ${item.title} </h2>
		<p class="skill--level"> ${item.level} </p>
	</div>
	<div class="full--bar">
		<div class="skill--bar" style="width: ${item.level};"></div>
	</div>
</div>`;
}

function skill() {
	skillWrapper.innerHTML = skills
		.map((skill) => createSkillBar(skill))
		.join("");
}
skill();
