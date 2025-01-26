'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

function Comment({ comment }: { comment: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const longComment = comment.length > 130;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button
          onClick={toggleExpanded}
          className="capitalize pl-0 text-muted-foreground"
          variant={'link'}
        >
          {isExpanded ? 'show less' : 'show more'}
        </Button>
      )}
    </div>
  );
}

export default Comment;
