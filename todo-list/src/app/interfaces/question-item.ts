export interface QuestionItem {
  id: number;
  title: string;
  answers: OptionItem[];
}

export interface OptionItem {
  text: string;
  points: number;
}

export interface UserAnswer {
  questionId: number;
  optionId?: number;
}
