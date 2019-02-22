import {Injectable} from '@angular/core';
import {IResponse} from '../../response';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private url: string = 'producto';
  constructor(private http: HttpClient) {
  }

  public getCategorysProductsTree$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }

  postCategorysProductsTree$(categoryProduct: object): Observable<IResponse> {
    return this.http.post<IResponse>(this.url, categoryProduct);
  }

  getCategoryProductTree$(id: string): Observable<IResponse> {
    return this.http.get<IResponse>(this.url + '/' + id);
  }
  putCategoryProductTree$(alm_producto_id: string, categoryProduct: object): Observable<IResponse> {
    return this.http.put<IResponse>(this.url + '/' + alm_producto_id, categoryProduct);
  }
}
