import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { AllbooklistComponent } from './allbooklist/allbooklist.component';
import { AlllendedbooksComponent } from './alllendedbooks/alllendedbooks.component';
import { BookByIdComponent } from './book-by-id/book-by-id.component';
import { BookListComponent } from './book-list/book-list.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';
import { BorrowedbooksComponent } from './borrowedbooks/borrowedbooks.component';
import { LoginComponent } from './login/login.component';
import { OverduebookComponent } from './overduebook/overduebook.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserlendedbooksComponent } from './userlendedbooks/userlendedbooks.component';
import { UseroverduebooksComponent } from './useroverduebooks/useroverduebooks.component';
import { UsersbybookComponent } from './usersbybook/usersbybook.component';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard]},
  {path:'admin/addbook',component:AddBookComponent, canActivate:[AuthGuard]},
  {path:'admin/booklist',component:BookListComponent, canActivate:[AuthGuard]},
  {path:'admin/updatebook',component:UpdateBookComponent, canActivate:[AuthGuard]},
  {path:'admin/getBookById',component:BookByIdComponent, canActivate:[AuthGuard]},
  {path:'admin/userlist',component:UserListComponent, canActivate:[AuthGuard]},
  {path:'admin/adduser',component:AddUserComponent, canActivate:[AuthGuard]},
  {path:'admin/updateuser',component:UpdateUserComponent, canActivate:[AuthGuard]},
  {path:'admin/borrowedbooks',component:BorrowedbooksComponent, canActivate:[AuthGuard]},
  {path:'admin/overduebooks',component:OverduebookComponent, canActivate:[AuthGuard]},
  {path:'admin/usersbybook',component:UsersbybookComponent, canActivate:[AuthGuard]},
  {path:'admin/alllendedbooks',component:AlllendedbooksComponent, canActivate:[AuthGuard]},
  {path:'user',component:UserComponent, canActivate:[AuthGuard]},
  {path:'user/booklist',component:AllbooklistComponent, canActivate:[AuthGuard]},
  {path:'user/lendedbooklist',component:UserlendedbooksComponent, canActivate:[AuthGuard]},
  {path:'user/overduebooklist',component:UseroverduebooksComponent, canActivate:[AuthGuard]},
  {path:'user/borrowbook',component:BorrowbookComponent, canActivate:[AuthGuard]}
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
