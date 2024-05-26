import { Component, Input } from '@angular/core';
import { IComment } from '../../../types/IComment';
import { NgIf } from '@angular/common';
import { StarRatingComponent } from '../stars-rating/stars-rating.component';

@Component({
  selector: 'comment-card',
  templateUrl: './comment.component.html',
  standalone: true,
  imports: [NgIf, StarRatingComponent],
})
export class CommentCardComponent {
  @Input() comment: IComment = {
    id: '-1',
    comment: 'NA',
    user: {
      avatar: null,
      name: 'NA',
    },
    rate: 0,
  };
}
