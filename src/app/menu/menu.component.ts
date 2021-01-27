import { Component, OnInit } from '@angular/core';
import {BlogsdataService} from '../services/blogsdata.service';
import {ModelService,blogAPI} from '../model/model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  blogdatas:blogAPI;
  localblogdata = {};
  blogpage = {};
  items = [];
  blogview = new ModelService();
  pageOfItems: Array<any>;
  constructor(private blogdata:BlogsdataService, private Route:Router) {}

  ngOnInit(): void {
      this.blogdata.getBlog().subscribe((res:any)=>{
         this.blogdatas = res.blogs;
        this.items = Array(3).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})); //for pagination
      })
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  takemeto(data){
    this.localblogdata = {
      title :data.title,
      blog_url : data.blog_url,
      content : data.content,
      image : data.image,
      author:data.author,
      imgUrl : data.imgUrl,
      category_id : data.category_id,
      meta_title :data.meta_title,      
      meta_description : data.meta_description,
      meta_keyword : data.meta_keyword,
      time_toread : data.time_toread,
    }
    localStorage.setItem("blogdata",JSON.stringify(this.localblogdata));
    this.Route.navigate(['/view']);
  }

}
