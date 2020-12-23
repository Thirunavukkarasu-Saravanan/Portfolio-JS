function CreateSkillcards(skills) {
  const elSkill = $("#skills > div");
  let html = "";
  for (let skill of skills) {
    html += "<article class='skill' ";
    html += ">";
    html +=
      "    <img src='images/skill_" + skill.img + ".png' class='skill-icon' ";

    if (skill.style) {
      html += "  style='";
      html += JSON.stringify(skill.style)
        .replace("{", "")
        .replace("}", "")
        .replace(/"/g, "")
        .replace(/,/g, ";");
      html += "'";
    }

    html += "/>";
    html += "    <span class='skill-name'>" + skill.name + "</span>";
    html += "</article>";
  }
  elSkill.html(html);
}

function CreateWorkcards(works) {
  const elSkill = $("#skills > div");
  let html = "";
  for (let work of works) {
  }
  elSkill.html(html);
}

function ScrollTo(ev, obj) {
  ev.preventDefault();
  let currentElement = $(obj);
  let targetId = $(obj).data("target");
  let targetElement = $("#" + targetId);
  let targetOffset = targetElement.offset().top - 75 + "px";
  $(obj).parent().children().removeClass("active");
  $(obj).addClass("active");
  $("html,body").animate({ scrollTop: targetOffset }, "slow");
}

const skills = [
  { name: "JAVA", img: "java", rate: 8 },
  { name: "PHP", img: "php", rate: 8 },
  { name: "Python", img: "python", rate: 8 },
  {
    name: "JavaScript",
    img: "js",
    rate: 8,
    style: { transform: "scale(1.2)" },
  },
  { name: "SQL", img: "sql", rate: 8 },
  { name: "HTML", img: "html", rate: 8 },
  { name: "CSS", img: "css", rate: 8 },
  { name: "jQuery", img: "jquery", rate: 8 },
  { name: "React JS", img: "reactjs", rate: 8 },
  { name: "SASS", img: "sass", rate: 8 },
  { name: "AJAX", img: "ajax", rate: 8, style: { width: "auto" } },
];

$(document).ready(function () {
  CreateSkillcards(skills);
});
