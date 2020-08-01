package com.example.mind_optimizers_android_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.text.Html;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.view.View;
import android.widget.TextView;

public class JobActivity extends AppCompatActivity {

    TextView job1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_job);

        job1 = findViewById(R.id.Job1);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.indeed.co.in/Persons-With-Disabilities-jobs";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job2);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-Special-Educator-Specialist-in-Learning-Disability-Bangalore-Oniyavara-Seva-Coota-BOSCO-Bengaluru-Mysore-0-to-5-years-111218500006?src=seo_srp&sid=15799363338604&xp=3&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job3);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-Automation-Tester-disability-1-To-3-Bangalore-Client-Of-Sampoorna-Bengaluru-1-to-3-years-241219002221?src=seo_srp&sid=15799363338604&xp=4&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job4);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-Associate-Customer-Support-Voice-Process-Experience-0-To-4-Years-Accenture-Solutions-Pvt-Ltd-Bengaluru-0-to-4-years-100120004281?src=seo_srp&sid=15799363338604&xp=6&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job5);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-Technical-Support-customer-Service-Voice-non-Voice-Process-Concentrix-Daksh-Services-India-Private-Limited-Delhi-NCR-0-to-5-years-211119012206?src=seo_srp&sid=15799363338604&xp=9&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job6);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-Assistant-Professor-Impairment-Intellectual-Disability-Vacancy-1-Alagappa-University-Karaikudi-Karaikudi-1-to-1-years-240120905996?src=seo_srp&sid=15799363338604&xp=17&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job7);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-PWD-Hiring-Locomotor-Disability-ICICI-Lombard-General-Insurance-Company-Limited-Mumbai-0-to-5-years-160120009808?src=seo_srp&sid=15799363338604&xp=1&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job8);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-Assistant-Professor-Intellectual-Disability-Vacancy-1-Alagappa-University-Karaikudi-Karaikudi-1-to-1-years-240120905995?src=seo_srp&sid=15799363338604&xp=18&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        job1 = findViewById(R.id.Job9);

        job1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "https://www.naukri.com/job-listings-Process-Associate-Customer-Care-Non-Voice-Email-Chat-Support-Black-and-White-Business-Solutions-Pvt-Ltd-Bengaluru-0-to-5-years-070120001555?src=seo_srp&sid=15799363338604&xp=20&px=1";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });
    }
}

