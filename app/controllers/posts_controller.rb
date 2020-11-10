class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")  # すべてのレコードを@postsに代入
  end

  # def new
  # end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index
    end


  def checked
    post = Post.find(params[:id])
    # URLパラメーターから、既読したメモのidが渡される
    if post.checked
      # 既読であるか否かを判定するプロパティ
      post.update(checked: false)
      # false＝既読であ　
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end
    end


end
