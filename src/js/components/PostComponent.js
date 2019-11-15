import { getTemplate } from "../utils/template"
import moment from "moment";

export default class PostComponent extends HTMLElement {
	static name = "post-component"
	templateUri = '/templates/postDetail.html'
	service = window.blog.services.Post;
	postId;

	constructor() {
		super();

		this.postId = Number(window.location.pathname.match(/\d/));
	}

	connectedCallback() {
		this.render();

		this.addEventsLinsteners();
	}

	disconnectedCallback() {
		this.removeEventsListeners();
	}

	addEventsLinsteners() {
		document.addEventListener("likes", this.onLikes);
		document.addEventListener("view-post", this.onViewPost)
		document.addEventListener("new-comment", this.onCommentPost)
	}

	removeEventsListeners() {
		document.removeEventListener("likes", this.onLikes);
		document.removeEventListener("view-post", this.onViewPost);
		document.removeEventListener("new-comment", this.onCommentPost)
	}

	onLikes({ detail }) {
		let btn = document.getElementById(`btn-like-${detail.postId}`);

		if (detail.likeType == "like") {
			btn.setAttribute("data-liked", "true");

			btn.getElementsByTagName("span")[0].textContent = detail.likes;
			btn.classList.remove("btn-secondary");
			btn.classList.add("btn-primary");
		} else {
			btn.setAttribute("data-liked", "false");

			btn.getElementsByTagName("span")[0].textContent = detail.likes;
			btn.classList.remove("btn-primary");
			btn.classList.add("btn-secondary");
		}
	}

	onViewPost({ detail }) {
		try {
			let btn = document.getElementById(`btn-view-${detail.postId}`);
			btn.getElementsByTagName("span")[0].textContent = detail.views;
		} catch (error) {

		}
	}

	onCommentPost({ detail }) {
		let btn = document.getElementById(`btn-comment-${detail.postId}`);
		btn.getElementsByTagName("span")[0].textContent = detail.comments;
	}

	/**
	* Get base template from templates folder and set the innerHtml of the current component with it.
	*/
	async render() {
		let post = await this.getPost();
		const template = await getTemplate(this.templateUri);

		let temp = template.replace("@POST_TITLE", post.title)
			.replace(/@POST_ID/g, post.id)
			.replace("@POST_USER", post.userName)
			.replace("@POST_DATE", moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a'))
			.replace("@POST_BODY", post.body)
			.replace("@LIKES", post.likes)
			.replace("@TAGS", this.getTagsHtml(post))
			.replace("@COMMENTS", post.comments)
			.replace("@VIEWS", post.views);

		this.innerHTML = temp;
	}

	getTagsHtml(post) {
		let tags = "";
		for (let tag of post.tags) {
			tags += `<a href="#" class="badge badge-secondary mr-1">${tag}</a>`;
		}
		return tags;
	}

	async getPost() {
		let post = await this.service.getPost(this.postId);
		return post;
	}
}