export interface SimpleJobSubmission {
  job_description: string;
  questions?: string[];
  template: string;
}

export interface TailoredResumeResponse {
  resume_url: string;
  cover_letter_url?: string;
  answers?: string[];
  json_path?: string;
  text_path?: string;
}

export interface ResultsData {
  resume_url: string;
  cover_letter_url?: string;
  answers?: string[];
}
