interface Author {
  id?: number;
  display_name?: string;
}

class Author {
  constructor(public id?: number, public display_name?: string) {}

  static fromJson(json: any): Author {
    return new Author(
      json.id != null ? parseInt(json.id) : undefined,
      json.display_name != null ? String(json.display_name) : undefined,
    );
  }

  toJson(): any {
    return {
      id: this.id,
      display_name: this.display_name,
    };
  }
}

interface ArticleDetail {
  id?: number;
  distillery?: string;
  title?: string;
  description?: string;
  url?: string;
  date?: string;
  image?: string;
  caskDistilleryId?: number;
  author?: Author;
}

class ArticleDetail {
  constructor(
    public id?: number,
    public distillery?: string,
    public title?: string,
    public description?: string,
    public url?: string,
    public date?: string,
    public image?: string,
    public caskDistilleryId?: number,
    public author?: Author,
  ) {}

  static fromJson(json: any): ArticleDetail {
    return new ArticleDetail(
      json.id != null ? parseInt(json.id) : undefined,
      json.distillery != null ? String(json.distillery) : undefined,
      json.title != null ? String(json.title) : undefined,
      json.description != null ? String(json.description) : undefined,
      json.url != null ? String(json.url) : undefined,
      json.date != null ? String(json.date) : undefined,
      json.image != null ? String(json.image) : undefined,
      json.cask_distillery_id != null
        ? parseInt(json.cask_distillery_id)
        : undefined,
      json.author != null ? Author.fromJson(json.author) : undefined,
    );
  }

  toJson(): any {
    return {
      id: this.id,
      distillery: this.distillery,
      title: this.title,
      description: this.description,
      url: this.url,
      date: this.date,
      image: this.image,
      cask_distillery_id: this.caskDistilleryId,
      author: this.author?.toJson(),
    };
  }
}

export interface ArticleDetailResponse {
  success?: boolean;
  data?: ArticleDetail;
}

export class ArticleDetailResponse {
  constructor(public success?: boolean, public data?: ArticleDetail) {}

  static fromJson(json: any): ArticleDetailResponse {
    return new ArticleDetailResponse(
      json.success != null ? Boolean(json.success) : undefined,
      json.data != null ? ArticleDetail.fromJson(json.data) : undefined,
    );
  }

  toJson(): any {
    return {
      success: this.success,
      data: this.data?.toJson(),
    };
  }
}
