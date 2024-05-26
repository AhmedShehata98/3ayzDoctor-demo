import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommentCardComponent } from '../../../../shared/components/comment/comment.component';
import { IComment } from '../../../../types/IComment';
import { GlobalsModule } from '../../../../shared/globals.module';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [CommentCardComponent, GlobalsModule],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommentsListComponent {
  public comments: IComment[] = [
    {
      id: '1',
      comment:
        'تطبيق رائع والخدمه ممتازة خصوصا في الأدوية الناقصه اللي بيكون صعب تلاقيها',
      user: {
        avatar: null,
        name: 'amira tageldeen',
      },
      rate: 5,
    },
    {
      id: '2',
      comment:
        'الابلكيشن كويس استخدمته وكان جميل و فكرة انه جمع حجز الدكتور و طلب الادوية من الصيدلية في مكان واحد حاجة جميلة وفي عروض كويسة',
      user: {
        avatar: null,
        name: 'Donia Donia',
      },
      rate: 2,
    },
    {
      id: '3',
      comment: 'حلو جداا انا جربته في حجز الدكتور ورحت لقيت الحجز بتاعي',
      user: {
        avatar: null,
        name: 'Mirna Hosny',
      },
      rate: 3,
    },
    {
      id: '5',
      comment: 'very good design i think ahmed shehata who developed this',
      user: {
        avatar: null,
        name: 'anonymous user',
      },
      rate: 4,
    },
  ];
}
